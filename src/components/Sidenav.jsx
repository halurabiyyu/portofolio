import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <div className="relative bg-white">
          <AiOutlineMenu
            size={30}
            onClick={handleNav}
            className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer bg-"
          />
        </div>
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#project"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <MdOutlineWeb size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="relative md:block hidden bg-[#E74646]">
          <div className="fixed flex justify-between bg-[#E74646] w-full">
            <div className="mx-[50px] p-3">
              <h1 className="text-[#FFF3E2] font text-2xl font-bold">
                Halur Muhammad Abiyyu
              </h1>
            </div>
            <div className="flex flex-row ">
              <a
                href="#main"
                className="flex justify-center text-[#FFF3E2] items-center m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <span className="">About Me</span>
              </a>
              <a
                href="#projects"
                className="flex justify-center text-[#FFF3E2] items-center m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <span className="pl-2">Projects</span>
              </a>
              <a
                href="#contact"
                className="flex justify-center text-[#FFF3E2] items-center m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <span className="pl-2">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
