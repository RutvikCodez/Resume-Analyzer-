const MetricsCard = ({ label, value, ...props }: StatsItemType) => {
  return (
    <div
      className="bg-white rounded-lg p-3 border border-border flex flex-col gap-1"
      {...props}
    >
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
};

export default MetricsCard;
