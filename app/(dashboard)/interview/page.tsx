import InterviewCard from "@/components/dashboard/interview/InterviewCard";
import TitleDesc from "@/components/reusable/TitleDesc";
import { getAllInterviews } from "@/lib/interview.actions";
import { getDashboardData } from "@/lib/resume.actions";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;
  const { user } = await getDashboardData(clerkUser.id);
  if (!user) return null;
  const interviews = await getAllInterviews(user.id);

  return (
    <div className="flex flex-col gap-6">
      <TitleDesc
        title="Interview Dashboard"
        desc="Manage and review your mock interviews in one place. Track your progress, revisit questions, and improve your performance with AI-powered insights."
        cns="lg:col-span-2"
      />
      <div className="grid grid-cols-3 gap-6">
        {interviews.map((interview, index) => (
          <InterviewCard key={index} {...interview} />
        ))}
      </div>
    </div>
  );
};

export default page;
