import ATS from "@/components/dashboard/ATS";
import Summary from "@/components/dashboard/Summary";
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
  console.log(resume.fileUrl);

  return (
    <div className="grid grid-cols-2">
      <Image
        src={`${resume.fileUrl}/ik-thumbnail.jpg`}
        alt="resume"
        width={600}
        height={400}
        className="bg-white rounded-md"
      />
      <section className="flex flex-col gap-8 p-6">
        <h2 className="text-4xl font-bold">Resume Review</h2>
        {/* <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
          <Summary feedback={ai} />
          <ATS score={ai.ATS.score || 0} suggestions={ai.ATS.tips || []} />
        </div> */}
      </section>
    </div>
  );
};

export default Page;
