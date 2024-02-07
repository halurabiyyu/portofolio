import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <>
      <div className="h-auto w-full hover:scale-110 ease-in duration-300 ">
        <img src={img} alt="/" className="rounded-xl m-auto w-60 md:w-80 lg:w-max" />
        <div className="flex justify-center m-auto">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
