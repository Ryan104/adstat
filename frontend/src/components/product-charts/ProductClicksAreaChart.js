import React from "react";
import {
  AreaChart,
  Area,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export const ProductClicksAreaChart = ({ chartData, chartLines }) => {
  const areas = chartLines.map(({ name, color }) => (
    <Area
      key={name}
      type="monotone"
      dataKey={name}
      stroke={`${color}FF`}
      fill={`${color}33`}
      stackId="1"
    />
  ));

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Legend verticalAlign="top" height={36} />
        {areas}
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" />

        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
};
