import { Check } from "lucide-react";

const PointsItem = ({ item }: { item: string }) => {
  return (
    <li className="flex items-start gap-2">
      <Check className="text-primary shrink-0" />
      <span>{item}</span>
    </li>
    
  );
};

export default PointsItem;
