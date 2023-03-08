import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        onClick={handleOpenModal}
        className=" image-full hover:bg-gradient-to-tl from-white via-emerald-200 to-blue-300 border border-gray-300 rounded-lg p-2 cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
      >
        <figure className="brightness-50 hover:brightness-100 ">
          <img className="rounded-lg" src={project.bgImg} alt="Shoes" />
        </figure>
        <div className="flex justify-between">
          <h1 className="text-[#1c1d20] font-medium">{project.title}</h1>
          <h1 className="text-[#1c1d20] font-medium">{project.category}</h1>
        </div>

        {/* <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          View Details
        </button> */}
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 z-10 bg-black opacity-50 flex "></div>
            <motion.div
              className="fixed overflow-x-auto no-scrollbar h-[80vh] top-28 lg:left-24 xs:left-5  lg:right-24 xs:right-5 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-20"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
            >
              <h2 className="text-lg font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                distinctio adipisci ab rerum officiis possimus perspiciatis modi
                dolorum saepe harum minus, hic, quia iure consequuntur nobis
                ipsum repellat impedit pariatur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est, distinctio adipisci ab rerum
                officiis possimus perspiciatis modi dolorum saepe harum minus,
                pariatur.
              </h1>
              <p className="text-gray-600 font-bold mb-2">
                Price: ${project.price}
              </p>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
