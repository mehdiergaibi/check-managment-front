import DealCard from "./DealCard";
const PricingCardsInfos = [
  {
    img: "../../../public/single.png",
    title: "Single User",
    price: "30Dhs",
    checksNumber: "100 Checks Mounthly",
    users: "1 Granted User",
    analytics: "Analystics Not Allowed",
  },
  {
    img: "../../../public/double.png",
    title: "Two Users",
    price: "50Dhs",
    checksNumber: "150 Checks Mounthly",
    users: "2 Granted Users",
    analytics: "Analystics Allowed",
  },
  {
    img: "../../../public/triple.png",
    title: "Three Users",
    price: "59Dhs",
    checksNumber: "+ 150 Checks mounthly",
    users: "3 Granted User",
    analytics: "Analystics Allowed",
  },
];
const Pricing = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {PricingCardsInfos.map((card) => (
          <DealCard infos={card} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
