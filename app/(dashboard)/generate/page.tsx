import GenerateInterviewForm from "@/components/dashboard/interview/GenerateInterviewForm";
import InterviewSummary from "@/components/dashboard/interview/InterviewSummary";
import JobPreview from "@/components/dashboard/interview/JobPreview";
import TitleDesc from "@/components/reusable/TitleDesc";

const Page = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <TitleDesc
        title="Mock Interview Generator"
        desc="Create personalized interview questions based on your skills and role. Practice smarter with AI-driven mock interviews and boost your confidence."
        cns="col-span-2"
      />    
      <JobPreview />
      <GenerateInterviewForm />
      <InterviewSummary />
    </div>
  );
};

export default Page;
