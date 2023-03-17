import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../Context/ProjectData";
import Navbar from "../../Navbar/Navbar";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectDetails/ProjectModal";

const Projects = () => {
  const [projectDte, setProjectDte] = useState(null);

  const { projects } = useContext(ProjectContext);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-[1250px] xs:px-4 lg:px-0 mt-24 mx-auto">
        <div className="mb-5">
          <h1 className="text-center text-[#EDECE8] lg:text-[16rem] xs:text-[4rem] font-semibold tracking-wide">
            All Works
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              setProjectDte={setProjectDte}
              project={project}
            />
          ))}
          <ProjectModal projectDte={projectDte}></ProjectModal>
        </div>
      </div>
    </div>
  );
};

export default Projects;
