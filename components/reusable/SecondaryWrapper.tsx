import { cn } from "@/lib/utils";

const SecondaryWrapper = ({children,desc,title,color, ...props}: SecondaryWrapperType) => {
  return (
    <section className={cn("w-full py-20", color)} {...props}>
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-pretty">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {desc}
          </p>
        </div>

       {children}
      </div>
    </section>
  );
};

export default SecondaryWrapper;
