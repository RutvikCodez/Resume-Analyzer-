import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ToneAndStyle = ({ score, suggestions, ...props }: ATSProps) => {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Tone & Style</CardTitle>
        <CardDescription>{score}/100</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
            {suggestions.map((item, index)=>(
                <li key={index} className="flex flex-col gap-3">
                    <h3 className="font-semibold">{item.tip}</h3>
                    <p className="text-muted-foreground">{item.explanation}</p>
                </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ToneAndStyle;
