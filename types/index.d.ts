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

type AIResponse = {
  overallScore: number;
  ATS: { score: number; tips: { type: "good" | "improve"; tip: string }[] };
  toneAndStyle: {
    score: number;
    tips: { type: "good" | "improve"; tip: string }[];
  };
  content: { score: number; tips: { type: "good" | "improve"; tip: string }[] };
  structure: {
    score: number;
    tips: { type: "good" | "improve"; tip: string }[];
  };
  skills: { score: number; tips: { type: "good" | "improve"; tip: string }[] };
  experience: {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    schoolName: string;
    educationLevel: string;
    startDate: string;
    endDate: string;
    cgpaOrMark: string;
  }[];
};
