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

type stepCardType =  StatsItemType & {
    step: number
}

type footerLinkType = {
  title: string
  links: string[]
}

type SecondaryWrapperType = {
  title: string
  desc: string
  children: React.ReactNode
  color?: string
}