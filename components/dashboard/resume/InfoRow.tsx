const InfoRow = ({ title, desc, ...props }: TitleDescType) => (
  <div className="flex w-full justify-between items-center" {...props}>
    <h3 className="text-lg font-bold">{title}:</h3>
    <span>{desc}</span>
  </div>
);

export default InfoRow;
