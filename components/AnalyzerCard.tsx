const AnalyzerCard = ({ Icon, desc, title, ...props }: ProblemCardType) => {
  return (
    <div className="flex gap-4" {...props}>
      <Icon className="text-primary shrink-0" />
      <div className="flex flex-col gap-1">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default AnalyzerCard;
