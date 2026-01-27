type StatsItemType = {
  value: string;
  label: string;
};

type ProblemCardType = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc: string;
};
