import React from "react";

const ProjectModal = ({ projectDte }) => {
  console.log(projectDte);
  return (
    <div>
      <input type="checkbox" id="project-details" className="modal-toggle" />
      <div className="modal">
        <div className="no-scrollbar modal-box w-11/12 max-w-5xl relative">
          <div className="sticky top-0 bg-[#ACCBE1] flex items-center p-2 rounded ">
            <label
              htmlFor="project-details"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="lg:text-2xl xs:text-lg font-bold ">
              {projectDte?.title}
            </h3>
          </div>

          <p className="py-4">WEB APP</p>

          <div>
            <div className="">
              <div className="border-2 p-2 flex lg:flex-row xs:flex-col gap-3 mb-5">
                <div>
                  <img className="rounded-lg" src={projectDte?.imgOne} alt="" />
                </div>
                <div>
                  <img className="rounded-lg" src={projectDte?.imgOne} alt="" />
                </div>
              </div>
              <p className="text-xl">{projectDte?.DescriptionOne}</p>
            </div>
            <div className="my-10">
              <div className="border-2 p-2 mb-5">
                <img src={projectDte?.imgThree} alt="" />
              </div>
              <p className="text-xl">{projectDte?.DescriptionTwo}</p>
            </div>
            <div className="my-10">
              <div className="border-2 p-2 mb-5 flex justify-center">
                <img src={projectDte?.imgFour} alt="" />
              </div>
              <p className="text-xl">{projectDte?.DescriptionThree}</p>
            </div>
            <div className="my-10">
              <div className="border-2 p-2 mb-5 flex justify-center">
                <img src={projectDte?.imgFive} alt="" />
              </div>
              <p className="text-xl">{projectDte?.DescriptionFour}</p>
            </div>
            <div className="my-10">
              <div className="border-2 p-2 mb-5 flex justify-center">
                <img src={projectDte?.imgSix} alt="" />
              </div>
              <p className="text-xl">{projectDte?.DescriptionFive}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
