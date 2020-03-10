import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

export const ProductAdvertiserClicksPieChart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <PieChart>
        <Legend verticalAlign="top" height={36} />

        <Pie
          data={chartData}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="clicks"
          nameKey="name"
          label="true"
        >
          {chartData.map(entry => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
