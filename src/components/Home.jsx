import React from "react";
import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";


const Home = () => {
  return (
    <div id="main" className="bg-white min-w-md">
      <div className="w-full h-screen absolute ">
        <div className="absolute top-[157px] left-[130px]">
          <h1 className="font-extrabold text-5xl text-blue">Hi</h1>
          <h1 className="font-bold text-3xl "> I'm Halur Muhammad Abiyyu</h1>
          <h1 className="font-bold italic text-5xl text-blue">
            FRONT-END DEVELOPER
          </h1>
          <div className="w-[552px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
              tortor justo. Praesent graa placerat nunc, in tincidunt urna.
              Donec tincidunt feugiat tellus, sit amet ultrices tortor maximus
              quis. Quisque volutpat dapibus auctor.
            </p>
          </div>
          <div className="flex flex-row my-2">
            <FaInstagram color="blue" size={40}/>
            <TbBrandLinkedin color="blue" size={40} />
            <IoLogoGithub color="blue" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
