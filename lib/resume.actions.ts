"use server";

import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { prepareInstructions } from "@/constants";
import { ResumeSection } from "@/app/generated/prisma/enums";
import prisma from "./prisma";

export const analyzeResume = async (
  userId: string,
  resumeText: string,
  resumeUrl: string,
  fileName: string,
) => {
  const { text } = await generateText({
    model: google("gemini-2.5-flash-lite"),
    prompt: prepareInstructions(resumeText),
  });

  const clean = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const data: AIResponse = JSON.parse(clean);

  const resume = await prisma.resume.create({
    data: {
      userId,
      fileUrl: resumeUrl,
      fileName,
      overallScore: data.overallScore,
      atsScore: data.ATS.score,
      toneScore: data.toneAndStyle.score,
      contentScore: data.content.score,
      structureScore: data.structure.score,
      skillsScore: data.skills.score,
      rawAIResponse: data,
    },
  });

  await prisma.resumeTip.createMany({
    data: [
      ...data.ATS.tips.map((t) => ({
        section: ResumeSection.ATS,
        type: t.type,
        tip: t.tip,
        resumeId: resume.id,
      })),
      ...data.toneAndStyle.tips.map((t) => ({
        section: ResumeSection.TONE,
        type: t.type,
        tip: t.tip,
        resumeId: resume.id,
      })),
      ...data.content.tips.map((t) => ({
        section: ResumeSection.CONTENT,
        type: t.type,
        tip: t.tip,
        resumeId: resume.id,
      })),
      ...data.structure.tips.map((t) => ({
        section: ResumeSection.STRUCTURE,
        type: t.type,
        tip: t.tip,
        resumeId: resume.id,
      })),
      ...data.skills.tips.map((t) => ({
        section: ResumeSection.SKILLS,
        type: t.type,
        tip: t.tip,
        resumeId: resume.id,
      })),
    ],
  });

  await prisma.resumeExperience.createMany({
    data: data.experience.map((e) => ({
      resumeId: resume.id,
      ...e,
    })),
  });

  await prisma.resumeEducation.createMany({
    data: data.education.map((e) => ({
      resumeId: resume.id,
      ...e,
      cgpaOrMark: e.cgpaOrMark || null,
    })),
  });

  return resume;
};
