import { cn } from "@/lib/utils";

const Category = ({ tip, type, explanation, ...props }: Tip) => {
  return (
    <li className="flex items-center gap-3 rounded-md border p-2" {...props}>
      <p className="flex-1 text-sm">{tip}</p>
      <span
        className={cn(
          "text-xs px-2 py-1 rounded",
          type === "good"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700",
        )}
      >
        {type}
      </span>
    </li>
  );
};

export default Category;
