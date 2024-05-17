import Laptop from "./laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full text-black bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Check Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Check Analytics centrally
          </h1>
          <p>
            Manage Check Analytics centrally provides a centralized platform for
            in-depth analysis and insights into check-related data. Businesses
            can efficiently track, analyze, and optimize their check
            transactions, empowering informed decision-making and streamlined
            financial management.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
