import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import ProfileImg from "../assets/profpic.jpg";

const Home = () => {
  return (
    <div id="main" className="">
      <div className="w-full h-[70%] top-0 left-0 bg-white flex justify-around ">
        <div className="max-w-[700px] lg:mx-[50px] p-4 h-screen w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-extrabold sm:text-5xl text-3xl text-[#0013ba]">
            Hi
          </h1>
          <h1 className="font-bold sm:text-3xl text-2xl">
            I'm Halur Muhammad Abiyyu
          </h1>
          <h1
            className="flex sm:text-5x
          c:\Users\halur\Downloads\blob.svgl text-3xl font-bold italic text-[#0013ba]"
          >
            FRONT-END DEVELOPER
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            tortor justo. Praesent graa placerat nunc, in tincidunt urna. Donec
            tincidunt feugiat tellus, sit amet ultrices tortor maximus quis.
            Quisque volutpat dapibus auctor.
          </p>

          <div className="flex justify-between pt-6 my-2 max-w-[200px] w-full">
            <FaInstagram
              color="#0013ba"
              size={40}
              className="cursor-pointer"
              alt=""
            />
            <TbBrandLinkedin
              color="#0013ba"
              size={40}
              className="cursor-pointer"
            />
            <IoLogoGithub
              color="#0013ba"
              size={40}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={ProfileImg} alt="" className="h-[500px] rounded-full   "/>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0013ba" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,192C672,171,768,181,864,197.3C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default Home;
