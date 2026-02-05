import { Building, Calendar } from "lucide-react";

const ExperienceItem = ({
  company,
  description,
  endDate,
  jobTitle,
  startDate,
  ...props
}: Experience) => {
  return (
    <div className="flex flex-col gap-1" {...props}>
      <div>
        <h3 className="text-lg font-bold">{jobTitle}</h3>
        <div className="flex gap-3 text-muted-foreground">
          <span className="flex gap-1 items-center">
            <Building className="w-4 h-4" />
            {company}
          </span>
          <span className="flex gap-1 items-center">
            <Calendar className="w-4 h-4" />
            {startDate} - {endDate}
          </span>
        </div>
      </div>
      <ul className="list-disc">
        {description
          ?.split(/\. (?=[A-Z])/)
          .filter(Boolean)
          .map((point, i) => (
            <li key={i} className="ml-4">
              {point.trim()}.
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
