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
  return <div>page</div>;
};

export default page;
