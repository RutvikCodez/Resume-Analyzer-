import KPICard from "@/components/dashboard/KPICard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import Skills from "@/components/dashboard/Skills";
import UploadResume from "@/components/dashboard/UploadResume";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  if (!user) return;
  const prismaUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
    include: { resumes: true },
  });
  if (prismaUser?.resumes.length === 0)
    return <UploadResume userId={prismaUser.id} />;
  const resume = await prisma.resume.findFirst({
    where: { userId: prismaUser!.id },
    orderBy: { createdAt: "desc" },
  });

  if (!resume) return <UploadResume userId={prismaUser!.id} />;

  const typedResume = {
    ...resume,
    rawAIResponse: resume.rawAIResponse as AIResponse,
  };

  const ai = typedResume.rawAIResponse;
  const skillsTips = typedResume.rawAIResponse.skills.tips;
  const hello = typedResume.rawAIResponse.skills.score;

  const kpiCardsData: KPICardProps[] = [
    {
      title: "Overall Resume Score",
      value: ai.overallScore.toString(),
      unit: "%",
      description: "Overall resume strength",
    },
    {
      title: "ATS Score",
      value: ai.ATS.score.toString(),
      unit: "%",
      description: "Applicant Tracking System match",
    },
    {
      title: "Skills Score",
      value: ai.skills.score.toString(),
      unit: "%",
      description: "Technical skill strength",
    },
    {
      title: "Tone & Style",
      value: ai.toneAndStyle.score.toString(),
      unit: "%",
      description: "Communication & clarity",
    },
  ];

  const progressCardsData: ProgressCardProps[] = [
    {
      title: "Resume Optimization",
      value: ai.overallScore,
      description: "Overall resume strength",
    },
    {
      title: "ATS Readiness",
      value: ai.ATS.score,
      description: "ATS compatibility level",
    },
    {
      title: "Skill Development",
      value: ai.skills.score,
      description: "Technical skill strength",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome back, {prismaUser?.name}
        </h1>
        <p className="text-muted-foreground">
          You&apos;re on track to land your dream role. Continue building and
          interviewing!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCardsData.map((item, index) => (
          <KPICard key={index} {...item} />
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {progressCardsData.map((item, index) => (
          <ProgressCard key={index} {...item} />
        ))}
      </section>

      <Skills skillScore={typedResume.rawAIResponse.skills.score} skillsTips={typedResume.rawAIResponse.skills.tips} />
    </div>
  );
};

export default page;
