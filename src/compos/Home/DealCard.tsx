interface infosType {
  title: string;
  price: string;
  checksNumber: string;
  users: string;
  analytics: string;
}
interface propsType {
  img: string;
  infos: infosType;
}
const DealCard = ({ img, infos }: propsType) => {
  return (
    <div className="w-full text-black shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem] bg-white" src={img} alt="/" />
      <h2 className="text-2xl font-bold text-center py-8">{infos.title}</h2>
      <p className="text-center text-4xl font-bold">{infos.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{infos.checksNumber}</p>
        <p className="py-2 border-b mx-8">{infos.users}</p>
        <p className="py-2 border-b mx-8">{infos.analytics}</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
        Start Trial
      </button>
    </div>
  );
};

export default DealCard;
