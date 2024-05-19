import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

const data = [
  {
    status: "Pending",
    nbr: 60,
  },
  {
    status: "Deposited",
    nbr: 25,
  },
  {
    status: "Not Deposited",
    nbr: 6,
  },
];
function BarChar() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey={"status"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <Bar dataKey={"nbr"} radius={[4, 4, 0, 0]} fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChar;
