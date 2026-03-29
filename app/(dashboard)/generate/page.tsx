import GenerateInterviewForm from "@/components/dashboard/interview/GenerateInterviewForm";
import InterviewSummary from "@/components/dashboard/interview/InterviewSummary";
import JobPreview from "@/components/dashboard/interview/JobPreview";
import TitleDesc from "@/components/reusable/TitleDesc";
import { getDashboardData } from "@/lib/resume.actions";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const { user } = await getDashboardData(clerkUser.id);
  if (!user) return null;
  return (
    <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
      <TitleDesc
        title="Mock Interview Generator"
        desc="Create personalized interview questions based on your skills and role. Practice smarter with AI-driven mock interviews and boost your confidence."
        cns="lg:col-span-2"
      />
      <JobPreview />
      <GenerateInterviewForm userId={user.id} />
      <InterviewSummary />
    </div>
  );
};

export default Page;
