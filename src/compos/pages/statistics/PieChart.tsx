import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  { name: "Pending", value: 400 },
  { name: "Deposited", value: 200 },
  { name: "Not Deposited", value: 300 },
];

function CustomPieChart() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="green"
          stroke="#888888"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
