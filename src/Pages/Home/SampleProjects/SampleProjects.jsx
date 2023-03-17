import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../../Context/ProjectData";
import ProjectModal from "../../RoutePages/Projects/ProjectDetails/ProjectModal";
import SimpleProjectCard from "./SimpleProjectCard";

const SampleProjects = () => {
  const [projectDte, setProjectDte] = useState(null);
  const { projects } = useContext(ProjectContext);

  return (
    <div className="">
      <div className="max-w-[1250px] px-5  mx-auto pt-10">
        <div className="text-center">
          <h3 className="text-xl">Sample Projects</h3>
          <h1 className="text-4xl font-bold">A few samples of my work</h1>
        </div>

        <div className="grid grid-cols-12 xs:gap-7 lg:gap-10  mt-20">
          {projects.map((project) => (
            <SimpleProjectCard
              project={project}
              setProjectDte={setProjectDte}
            />
          ))}

          <ProjectModal projectDte={projectDte}></ProjectModal>
        </div>

        <div className="flex justify-center mt-16 pb-16">
          <Link to={"/work"}>
            <button className="btn border-[#6c63ff] hover:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 btn-outline gap-2 ">
              See All
              <img
                className="w-6"
                src="https://i.ibb.co/c222DBv/12-arrow-down-outline.gif"
                alt=""
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
