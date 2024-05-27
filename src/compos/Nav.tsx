import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ThemeToggle } from "@/components/ui/mode-toggle";

const pages = [
  {
    page: "Checks",
    link: "/checks",
  },
  {
    page: "Clients",
    link: "/clients",
  },
  {
    page: "Statistics",
    link: "/statistics",
  },
  {
    page: "Profie",
    link: "/profile",
  },
];

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="shadow-md w-full sticky top-0 left-0 bg-black z-30">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
          <Link
            to="/"
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white"
          >
            <span className="text-3xl mb-1 mr-1 pt-2">
              <FcMoneyTransfer />
            </span>
            CheckWise
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black
         md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
         ${open ? "top-20 opacity-100" : "top-[-490px]"}
         `}
        >
          {pages.map((page) => (
            <li
              key={page.link}
              className="md:ml-8 text-xl text-center md:my-0 my-7 pr-8"
            >
              <Link
                to={page.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {page.page}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle className="md:ml-8 text-xl text-center md:my-0 my-7 pr-8" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
