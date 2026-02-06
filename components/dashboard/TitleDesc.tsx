import { cn } from "@/lib/utils";

const TitleDesc = ({ title, desc, cns, ...props }: TitleDescType) => {
  return (
    <section className={cn("flex flex-col gap-2", cns)} {...props}>
      <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      <p className="text-muted-foreground">{desc}</p>
    </section>
  );
};

export default TitleDesc;
