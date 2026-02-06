import Image from "next/image";
import { Card } from "../ui/card";

const ATS = ({ score, suggestions }: ATSProps) => {
  const iconSrc =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
        ? "/icons/ats-warning.svg"
        : "/icons/ats-bad.svg";

  const subtitle =
    score > 69 ? "Great Job!" : score > 49 ? "Good Start" : "Needs Improvement";

  return (
    <Card className={"w-full p-6 flex flex-col gap-6"}>
      <div className="flex items-center gap-4">
        <Image fill src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{subtitle}</h3>
          <p className="text-gray-600">
            This score represents how well your resume is likely to perform in
            Applicant Tracking Systems used by employers.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5 mt-1"
                fill
              />
              <p
                className={
                  suggestion.type === "good"
                    ? "text-green-700"
                    : "text-amber-700"
                }
              >
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-700 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters and into the hands of recruiters.
      </p>
    </Card>
  );
};

export default ATS;
