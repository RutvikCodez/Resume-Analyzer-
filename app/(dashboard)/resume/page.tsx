import EducationItem from "@/components/dashboard/EducationItem";
import ExperienceItem from "@/components/dashboard/ExperienceItem";
import InfoRow from "@/components/dashboard/InfoRow";
import ResumeWrapper from "@/components/dashboard/ResumeWrapper";
import SkillChip from "@/components/dashboard/SkillChip";
import TitleDesc from "@/components/dashboard/TitleDesc";
import UploadResume from "@/components/dashboard/UploadResume";
import { getDashboardData } from "@/lib/resume.actions";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const { user, resume } = await getDashboardData(clerkUser.id);
  if (!resume) return <UploadResume userId={user!.id} />;

  const ai = resume.rawAIResponse as AIResponse;

  const cardData: ResumeWrapperType[] = [
    {
      title: "Personal Information",
      children: <InfoRow title="Legal Name" desc={user?.name || ""} />,
    },
    {
      title: "Contact Information",
      children: <InfoRow title="Email" desc={user?.email} />,
    },
    {
      title: "Education History",
      children: (
        <div className="flex flex-col gap-2">
          {ai.education?.map((edu, i) => (
            <EducationItem key={i} {...edu} />
          ))}
        </div>
      ),
    },
    {
      title: "Skills",
      children: (
        <div className="flex gap-2 flex-wrap">
          {ai.skillProficiency?.slice(0, 15).map(({ name }, i) => (
            <SkillChip key={i} name={name} />
          ))}
        </div>
      ),
    },
    {
      title: "Work History",
      cns: "col-span-2",
      children: (
        <div className="flex flex-col gap-3">
          {ai.experience?.map((exp, i) => (
            <ExperienceItem key={i} {...exp} />
          ))}
        </div>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-6">
      <TitleDesc
        title="Profile"
        desc="Your resume is analyzed and insights are ready. Let's sharpen your profile and prepare you to crack interviews with confidence."
        cns="col-span-2"
      />
      {cardData.map((item, index) => (
        <ResumeWrapper key={index} {...item} />
      ))}
    </div>
  );
};

export default Page;
