const StatsItem = ({ label, value, ...props }: StatsItemType) => {
  return (
    <div className="text-center flex flex-col gap-1" {...props}>
      <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
      <p className="text-sm md:text-base text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatsItem;
