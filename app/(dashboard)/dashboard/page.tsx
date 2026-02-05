import KPICard from "@/components/dashboard/KPICard";
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiCardsData.map((item, index) => (
        <KPICard key={index} {...item} />
      ))}
    </div>
  );
};

export default page;
