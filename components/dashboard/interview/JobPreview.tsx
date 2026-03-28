import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { jobPreviewSections } from "@/constants";

const JobPreview = () => {
  return (
    <Card className="h-full row-span-2">
      <CardHeader>
        <div className="flex w-full justify-between">
          <CardTitle>Frontend Developer</CardTitle>
          <Badge variant={"destructive"}>Example</Badge>
        </div>

        <CardDescription className="flex flex-col gap-1 text-xs">
          <span>Company: Cleartrip</span>
          <span>Location: Bengaluru, India</span>
          <span>Salary: Not Mentioned</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 text-sm leading-relaxed">
        {jobPreviewSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-2">
            <h3 className="font-semibold">{section.title}</h3>

            {section.content && (
              <p className="text-muted-foreground">{section.content}</p>
            )}

            {section.list && (
              <ul className="list-disc pl-5 flex flex-col gap-1 text-muted-foreground">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default JobPreview;
