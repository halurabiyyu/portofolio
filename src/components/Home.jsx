import React from "react";
import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

const Home = () => {
  return (
    <div id="main">
      <div className="bg-white w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="font-extrabold sm:text-5xl text-3xl text-blue">Hi</h1>
          <h1 className="font-bold sm:text-3xl text-2xl">
            I'm Halur Muhammad Abiyyu
          </h1>
          <h1 className="flex sm:text-5xl text-3xl font-bold italic text-blue">
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
              color="blue"
              size={40}
              className="cursor-pointer"
              alt=""
            />
            <TbBrandLinkedin
              color="blue"
              size={40}
              className="cursor-pointer"
            />
            <IoLogoGithub color="blue" size={40} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
