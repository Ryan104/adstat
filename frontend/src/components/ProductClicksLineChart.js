import React from "react";
import {
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { productClicksOverTime } from "../chart-data-helpers/product-clicks-over-time";
import { generateColor } from "../chart-data-helpers/color-generator";

export const ProductClicksLineChart = ({ productReports }) => {
  const { chartData, chartLines } = productClicksOverTime(productReports);
  const lines = chartLines.map(name => (
    <Line
      key={name}
      type="monotone"
      dataKey={name}
      stroke={`#${generateColor()}`}
    />
  ));
  return (
    <LineChart
      width={600}
      height={300}
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
  );
};
