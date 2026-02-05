type StatsItemType = {
  value: string;
  label: string;
};

type ProblemCardType = {
  Icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
};

type SolutionCardType = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
  points?: string[];
};

type stepCardType = StatsItemType & {
  step: number;
};

type footerLinkType = {
  title: string;
  links: string[];
};

type SecondaryWrapperType = {
  title: string;
  desc: string;
  children: React.ReactNode;
  color?: string;
};

type navLinksType = {
  title: string;
  href: string;
  icon: string;
};

type Tip = {
  type: "good" | "improve";
  tip: string;
  explanation?: string;
};

type SectionBlock = {
  score: number;
  tips: Tip[];
};

type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Education = {
  schoolName: string;
  educationLevel: string;
  startDate: string;
  endDate: string;
  cgpaOrMark: string | null;
};

type AIResponse = {
  overallScore: number;
  ATS: SectionBlock;
  toneAndStyle: SectionBlock;
  content: SectionBlock;
  structure: SectionBlock;
  skills: SectionBlock;
  experience: Experience[];
  education: Education[];
};

type ResumeAnalysis = {
  id: string;
  userId: string;
  fileUrl: string;
  fileName: string;
  overallScore: number;
  atsScore: number;
  toneScore: number;
  contentScore: number;
  structureScore: number;
  skillsScore: number;
  rawAIResponse: AIResponse;
  createdAt: string;
};

type KPICardProps = {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  className?: string;
};

type ProgressCardProps = {
  title: string;
  value: number;
  max?: number;
  description?: string;
  className?: string;
};
