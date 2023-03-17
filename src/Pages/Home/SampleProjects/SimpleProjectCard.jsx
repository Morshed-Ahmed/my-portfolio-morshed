import React from "react";

const SimpleProjectCard = ({ project, setProjectDte }) => {
  return (
    <>
      <label
        htmlFor="project-details"
        onClick={() => setProjectDte(project)}
        key={project.id}
        className="cursor-pointer lg:col-span-6 xs:col-span-12 transition ease-in-out delay-150  hover:-translate-y-.5 hover:scale-110  duration-500"
      >
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
      </label>
    </>
  );
};

export default SimpleProjectCard;
