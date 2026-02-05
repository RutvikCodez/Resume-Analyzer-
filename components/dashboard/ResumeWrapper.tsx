import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ResumeWrapper = ({
  children,
  title,
  cns,
  ...props
}: ResumeWrapperType) => {
  return (
    <Card className={cns} {...props}>
      <CardHeader>
        <CardTitle className="text-center text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ResumeWrapper;
