import { Building2 } from "lucide-react";

const EducationItem = ({
  cgpaOrMark,
  educationLevel,
  endDate,
  schoolName,
  startDate,
  ...props
}: Education) => {
  return (
    <div className="flex flex-col" {...props}>
      <h3 className="font-bold">{schoolName}</h3>
      <div className="flex gap-3 text-muted-foreground">
        <span className="flex gap-1 items-center">
          <Building2 className="w-4 h-4" />
          {educationLevel}
        </span>
        <span>
          {startDate} {endDate}
        </span>
        <span>{cgpaOrMark}</span>
      </div>
    </div>
  );
};

export default EducationItem;
