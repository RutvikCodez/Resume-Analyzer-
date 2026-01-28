import { Check } from "lucide-react";

const ServicesCard = ({label,value, ...props}: StatsItemType) => {
  return (
    <div className="flex gap-4" {...props}>
      <Check className="text-primary shrink-0" />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg">{label}</h3>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
