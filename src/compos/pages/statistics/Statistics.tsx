import { HandCoins } from "lucide-react";
import StatCard, { CardContent, PropsType } from "./StatCard";
import BarChar from "./BarChar";
import CustomPieChart from "./PieChart";
const cardData: PropsType[] = [
  {
    title: "Total Checks",
    amount: "83,400 Dhs",
    desc: "Total of 50 checks",
    Icon: HandCoins,
  },
  {
    title: "Pending Checks",
    amount: "33,400 Dhs",
    desc: "Total of 20 checks",
    Icon: HandCoins,
  },
  {
    title: "Deposited Checks",
    amount: "23,400 Dhs",
    desc: "Total of 10 checks",
    Icon: HandCoins,
  },
  {
    title: "Note Deposited Checks",
    amount: "13,100 Dhs",
    desc: "Total of 20 checks",
    Icon: HandCoins,
  },
];
const Statistics = () => {
  return (
    <div className="flex flex-col gap-5 w-full container my-8">
      <h1 className="text-2xl font-bold">Statistics</h1>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data) => (
          <StatCard
            key={data.title}
            title={data.title}
            Icon={data.Icon}
            desc={data.desc}
            amount={data.amount}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Number of Check By Status</p>
          <BarChar />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">Distribution of Check Statuses</p>
          <CustomPieChart />
        </CardContent>
      </section>
    </div>
  );
};

export default Statistics;
