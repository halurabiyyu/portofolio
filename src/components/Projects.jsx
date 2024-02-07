import React from "react";
import ProjectItem from "./ProjectItem";
import adminSistemImg from "../assets/admin-sistem2.png";
import bookshelfImg from "../assets/bookshelf.png";
import calculatorImg from "../assets/calculator.png";
import Wave from "../assets/wave.svg"

const Projects = () => {
  return (
    <div id="projects" className="bg-[#0013ba]">
      <div className="max-w-[1080px] w-full m-auto p-4 py-20">
        <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
        <p className="text-center text-white py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          veniam. Rem, non hic. Necessitatibus placeat ullam cupiditate dolor!
          Ipsum repellat quis adipisci quae non asperiores molestias commodi
          tenetur, delectus et!
        </p>
        <div className="grid sm:grid-cols-3 gap-12 text-white">
          <ProjectItem img={adminSistemImg} title="Admin Sistem" />
          <ProjectItem img={bookshelfImg} title="Bookshelf" />
          <ProjectItem img={calculatorImg} title="Calculator"/>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,192C672,171,768,181,864,197.3C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
};

export default Projects;
