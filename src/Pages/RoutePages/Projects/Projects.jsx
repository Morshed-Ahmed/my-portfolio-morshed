import React from "react";
import Navbar from "../../Navbar/Navbar";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      bgImg: "https://i.ibb.co/85F0rS7/job-potal.png",
      category: "Web App",
      title: "Job Portal Website",
    },
    {
      id: 2,
      bgImg:
        "https://i.ibb.co/nBCK16y/screenshot-learn-hive-website-vercel-app-2023-02-28-10-59-07.png",
      category: "Web App",
      title: "Online Learn Hive Website",
    },
    {
      id: 3,
      bgImg: "https://i.ibb.co/z2CgLJY/healthcare.png",
      category: "Web App",
      title: "Healthcare Website",
    },
    {
      id: 4,
      bgImg: "https://i.ibb.co/z2CgLJY/healthcare.png",
      category: "Web App",
      title: "Healthcare Website",
    },
  ];
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
