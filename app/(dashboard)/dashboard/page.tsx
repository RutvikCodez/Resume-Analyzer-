import KPICard from "@/components/dashboard/KPICard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import SkillChart from "@/components/dashboard/SkillChart";
import Skills from "@/components/dashboard/Skills";
import UploadResume from "@/components/dashboard/UploadResume";
import { getDashboardData } from "@/lib/resume.actions";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const { user, resume } = await getDashboardData(clerkUser.id);
  if (!resume) return <UploadResume userId={user!.id} />;

  const ai = resume.rawAIResponse as AIResponse;

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
    <div className="flex flex-col gap-8 ">
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-foreground">
          Welcome back, {user?.name}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Skills skillProficiency={ai.skillProficiency} />
        <SkillChart skillProficiency={ai.skillProficiency} />
      </div>
    </div>
  );
};

export default page;
