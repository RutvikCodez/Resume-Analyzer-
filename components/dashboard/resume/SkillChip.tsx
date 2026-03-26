const SkillChip = ({ name }: { name: string }) => {
  return (
    <span className="py-1 px-2 bg-muted-foreground rounded-full text-muted">
      {name}
    </span>
  );
};

export default SkillChip;
