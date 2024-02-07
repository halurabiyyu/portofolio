import React from "react";
import ProjectItem from "./ProjectItem";
import adminSistemImg from "../assets/admin-sistem.png";
import bookshelfImg from "../assets/bookshelf.png";
import calculatorImg from "../assets/calculator.png";

const Projects = () => {
  return (
    <div id="projects" className=" m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam.
        Rem, non hic. Necessitatibus placeat ullam cupiditate dolor! Ipsum
        repellat quis adipisci quae non asperiores molestias commodi tenetur,
        delectus et!
      </p>
      <div className="grid sm:grid-col-2 gap-12">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
