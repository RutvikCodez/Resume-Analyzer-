const StepCard = ({ label, step, value, ...props }: stepCardType) => {
  return (
    <div className="flex gap-6 md:gap-8" {...props}>
      <div className="flex flex-col items-center shrink-0 gap-2">
        <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-primary text-lg">
          {step + 1}
        </div>
        {step < 6 && <div className="w-0.5 h-16 bg-border" />}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{label}</h3>
        <p className="text-muted-foreground text-lg">{value}</p>
      </div>
    </div>
  );
};

export default StepCard;
