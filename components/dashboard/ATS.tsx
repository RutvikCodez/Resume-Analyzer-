import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Category from "./Category";

const ATS = ({ score, suggestions, ...props }: ATSProps) => {
  console.log(suggestions);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>ATS Score - {score}/100</CardTitle>
        <CardDescription>
          This score represents how well your resume is likely to perform in
          Applicant Tracking Systems used by employers.
        </CardDescription>
        <CardContent className="p-0">
          <ul className="flex flex-col gap-3">
            {suggestions.map((item, index) => (
              <Category key={index} {...item} />
            ))}
          </ul>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default ATS;
