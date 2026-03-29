"use server";

import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import prisma from "./prisma";
import { prepareJDInstructions } from "@/constants";

export const generateInterview = async ({
  userId,
  jobTitle,
  company,
  interviewLevel,
  jobDescription,
  location,
}: {
  userId: string;
  jobTitle: string;
  company: string;
  interviewLevel: "easy" | "medium" | "hard";
  jobDescription: string;
  location?: string;
}) => {
  const { text } = await generateText({
    model: google("gemini-2.5-flash-lite"),
    prompt: prepareJDInstructions({
      jobTitle,
      company,
      interviewLevel,
      jobDescription,
      location,
    }),
  });

  // 🔥 clean AI response
  const clean = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const data: AIJDResponse = JSON.parse(clean);

  // ✅ 1. Create Interview
  const interview = await prisma.interview.create({
    data: {
      userId,
      jobTitle: data.jobTitle,
      company: data.company,
      location: data.location || null,
      interviewLevel: data.interviewLevel,
      jobDescription: data.aboutJob,
    },
  });

  // ✅ 2. Save Screening Questions
  await prisma.interviewScreeningQuestion.createMany({
    data: data.screeningQuestions.map((q) => ({
      interviewId: interview.id,
      question: q.question,
    })),
  });

  // ✅ 3. Save Technical Questions
  await prisma.interviewTechnicalQuestion.createMany({
    data: data.technicalQuestions.map((q) => ({
      interviewId: interview.id,
      question: q.question,
    })),
  });

  return interview;
};

export const getAllInterviews = async (userId: string) => {
  return await prisma.interview.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}