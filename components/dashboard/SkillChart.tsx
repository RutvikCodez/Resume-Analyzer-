"use client";
import { COLORS } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const SkillChart = ({
  skillProficiency,
}: {
  skillProficiency: SkillProficiency[];
}) => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-base">Skill Distribution</CardTitle>
        <CardDescription>Your technical strengths</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={skillProficiency}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="percentage"
              nameKey="name"
              label={false}
            >
              {skillProficiency.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value ?? 0}%`} />
                <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SkillChart;
