import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-[800px] mt=[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] uppercase font-bold p-2">
          Leave the stress of check management behind.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md-py-6">
          Check Management made easy
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold">
            Fast, Flexible, Financing for
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 py-2 text-[#00df9a]"
            strings={["Direction", "Control", "Handling"]}
            typeSpeed={120}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Effortless check tracking and organization for seamless financial
          management.
        </p>
        <button className="bg-[#00df9a] w-[200px] text-black font-[Poppins] font-bold py-2 px-6 rounded my-2 mx-auto">
          Get Started!
        </button>
      </div>
    </div>
  );
};

export default Hero;
