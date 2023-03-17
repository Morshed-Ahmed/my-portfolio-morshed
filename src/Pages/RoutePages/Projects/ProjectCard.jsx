import React from "react";

const ProjectCard = ({ project, setProjectDte }) => {
  return (
    <div>
      <label onClick={() => setProjectDte(project)} htmlFor="project-details">
        <div className=" image-full hover:bg-gradient-to-tl from-white via-emerald-200 to-blue-300 border border-gray-300 rounded-lg p-2 cursor-pointer hover:shadow-md transition duration-300 ease-in-out">
          <figure className="brightness-50 hover:brightness-100 ">
            <img className="rounded-lg" src={project.bgImg} alt="Shoes" />
          </figure>
          <div className="flex justify-between">
            <h1 className="text-[#1c1d20] font-medium">{project.title}</h1>
            <h1 className="text-[#1c1d20] font-medium">{project.category}</h1>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ProjectCard;
