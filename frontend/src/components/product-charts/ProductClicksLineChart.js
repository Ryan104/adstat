import React from "react";
import {
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export const ProductClicksLineChart = ({ chartData, chartLines }) => {
  const lines = chartLines.map(({ name, color }) => (
    <Line key={name} type="monotone" dataKey={name} stroke={color} />
  ));

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Legend verticalAlign="top" height={36} />
        {lines}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
