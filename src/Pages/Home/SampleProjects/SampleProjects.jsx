import React from "react";
import { Link } from "react-router-dom";

const SampleProjects = () => {
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
    <div className="">
      <div className="container mx-auto pt-10">
        <div className="text-center">
          <h3 className="text-xl">Sample Projects</h3>
          <h1 className="text-4xl font-bold">A few samples of my work</h1>
        </div>

        <div className="grid grid-cols-12 xs:gap-7 lg:gap-10 cursor-pointer mt-20">
          {projects.map((project) => (
            <div className="lg:col-span-6 xs:col-span-12 transition ease-in-out delay-150  hover:-translate-y-.5 hover:scale-110  duration-500">
              <div className="card  bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={project?.bgImg} alt="job portal banner" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold">{project?.category}</h2>
                  <h1 className="lg:text-4xl xs:text-2xl font-bold">
                    {project?.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
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
