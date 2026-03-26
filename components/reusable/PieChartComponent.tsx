"use client";
import { COLORS } from "@/constants";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const PieChartComponent = <T extends Record<string, unknown>>({
  data,
  dataKey,
  nameKey,
  height = 350,
  innerRadius = 0,
  outerRadius = 100,
  cornerRadius,
  paddingAngle,
  ...props
}: PieChartCardProps<T>) => {
  return (
    <ResponsiveContainer width="100%" height={height} {...props}>
      <PieChart>
        <Pie
          data={data}
          dataKey={dataKey as string}
          nameKey={nameKey as string}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          cornerRadius={cornerRadius}
          paddingAngle={paddingAngle}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => `${v ?? 0}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
