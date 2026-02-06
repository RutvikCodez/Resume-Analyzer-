import ATS from "@/components/dashboard/ATS";
import Summary from "@/components/dashboard/Summary";
import TitleDesc from "@/components/dashboard/TitleDesc";
import ToneAndStyle from "@/components/dashboard/ToneAndStyle";
import UploadResume from "@/components/dashboard/UploadResume";
import { getDashboardData } from "@/lib/resume.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const { user, resume } = await getDashboardData(clerkUser.id);
  if (!resume) return <UploadResume userId={user!.id} />;

  const ai = resume.rawAIResponse as AIResponse;
  const sections = [
    {
      score: ai.toneAndStyle.score,
      suggestions: ai.toneAndStyle.tips,
    },
    {
      score: ai.content.score,
      suggestions: ai.content.tips,
    },
    {
      score: ai.structure.score,
      suggestions: ai.structure.tips,
    },
    {
      score: ai.skills.score,
      suggestions: ai.skills.tips,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      <TitleDesc
        title="Resume Review"
        desc="Preview your uploaded resume and explore AI-powered insights to improve your profile."
        cns="col-span-2"
      />
      <Image
        src={`${resume.fileUrl}/ik-thumbnail.jpg`}
        alt="resume"
        width={600}
        height={400}
        className="bg-white rounded-md row-span-2"
      />
      <Summary feedback={ai} />
      <ATS score={ai.ATS.score} suggestions={ai.ATS.tips} />
      {sections.map((item, index) => (
        <ToneAndStyle key={index} {...item} />
      ))}
    </div>
  );
};

export default Page;
