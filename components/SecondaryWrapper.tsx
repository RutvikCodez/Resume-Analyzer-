const SecondaryWrapper = ({children,desc,title, ...props}: SecondaryWrapperType) => {
  return (
    <section className="w-full py-20 bg-secondary/30" {...props}>
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
