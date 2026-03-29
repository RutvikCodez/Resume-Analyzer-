import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const InterviewCard = ({
  company,
  createdAt,
  id,
  interviewLevel,
  jobTitle,
  location,
  jobDescription,
  ...props
}: Interview) => {
  return (
    <Link href={`/interview/${id}`} className="w-full" {...props}>
      <Card>
        <CardHeader>
          <div className="flex w-full justify-between">
            <CardTitle>{jobTitle}</CardTitle>
            <Badge variant={"destructive"} className="capitalize">
              {interviewLevel}
            </Badge>
          </div>

          <CardDescription className="flex flex-col gap-1 text-xs">
            <span>Company: {company}</span>
            <span>Location: {location || "Not Mentioned"}</span>
            <span>Created: {new Date(createdAt).toLocaleDateString()}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 text-sm leading-relaxed">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Summary</h3>
            <ul className="list-disc pl-5 text-muted-foreground flex flex-col gap-1">
              {jobDescription
                .split(". ")    
                .filter((point) => point.trim() !== "")
                .map((point, index) => (
                  <li key={index}>{point.trim()}.</li>
                ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InterviewCard;
