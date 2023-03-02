import React from "react";
import Navbar from "../../Navbar/Navbar";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { MdQueryStats } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMaterialui } from "react-icons/si";
import { CgNpm } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { FaFigma } from "react-icons/fa";
import { TbCode } from "react-icons/tb";
// import { VscCode } from "react-icons/vs";

const About = () => {
  const skills = [
    {
      id: 1,
      icon: <DiJavascript1 size={30} />,
      title: "Javascript",
    },
    {
      id: 2,
      icon: <FaReact size={30} />,
      title: "React Js  ",
    },
    {
      id: 3,
      icon: <SiRedux size={30} />,
      title: "Redux",
    },
    {
      id: 4,
      icon: <MdQueryStats size={30} />,
      title: "TanStack Query",
    },
    {
      id: 5,
      icon: <FaNodeJs size={30} />,
      title: "Node Js",
    },
    {
      id: 6,
      icon: <SiExpress size={30} />,
      title: "Express Js",
    },
    {
      id: 7,
      icon: <TbBrandFirebase size={30} />,
      title: "Firebase",
    },
    {
      id: 8,
      icon: <TbApi size={30} />,
      title: "Rest API",
    },
    {
      id: 9,
      icon: <SiMongodb size={30} />,
      title: "MongoDB",
    },
    {
      id: 10,
      icon: <SiJsonwebtokens size={30} />,
      title: "JSON Web Token",
    },
    {
      id: 11,
      icon: <ImHtmlFive2 size={30} />,
      title: "HTML",
    },
    {
      id: 12,
      icon: <TbBrandCss3 size={30} />,
      title: "CSS",
    },
    {
      id: 13,
      icon: <TbBrandBootstrap size={30} />,
      title: "Bootstrap",
    },
    {
      id: 14,
      icon: <TbBrandTailwind size={30} />,
      title: "Tailwind CSS",
    },
    {
      id: 15,
      icon: <SiMaterialui size={30} />,
      title: "Material UI",
    },
    {
      id: 16,
      icon: <CgNpm size={30} />,
      title: "NPM",
    },
    {
      id: 17,
      icon: <AiFillGithub size={30} />,
      title: "GitHub",
    },
    {
      id: 18,
      icon: <SiNetlify size={30} />,
      title: "Netlify",
    },
    {
      id: 19,
      icon: <RxVercelLogo size={30} />,
      title: "Vercel",
    },
    {
      id: 20,
      icon: <FaFigma size={30} />,
      title: "Figma",
    },
    {
      id: 21,
      icon: <TbCode size={30} />,
      title: "VS Code Editor",
    },
  ];
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="max-w-[1250px] xs:px-4 lg:px-0 mx-auto">
        <div className=" flex items-center    h-[100vh]">
          <div className="flex lg:flex-row xs:flex-col gap-10 w-full">
            <div className="bg-gradient-to-tl from-white via-emerald-200 to-blue-300 lg:w-[80%] xs:w-[100%]  lg:h-[300px] xs:h-[200px]   flex justify-center  rounded-2xl">
              <img
                className="h-[100%]  xs:px-5"
                src="https://i.ibb.co/tH6Z9bm/image.png"
                alt=""
              />
            </div>

            <div className="card py-14 h-full bg-base-100 shadow-2xl">
              <div className="card-body ">
                <h2 className="card-title lg:text-4xl xs:text-3xl font-bold">
                  Hey, I'm Morshed Ahmed{" "}
                </h2>
                <p className="text-xl">As MERN stack developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-12 gap-7">
            <div className="lg:col-span-6 xs:col-span-12">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title lg:text-4xl xs:text-3xl font-bold mb-5">
                    About me
                  </h2>
                  <p className="text-xl">
                    Hi there! I'm Morshed Ahmed, a web developer with 2 years of
                    experience in building responsive and user-friendly
                    websites. I have a passion for creating digital experiences
                    that are not only visually appealing but also functional and
                    accessible to all users.
                  </p>
                  <p className="text-xl">
                    My expertise includes a wide range of web technologies such
                    as HTML, CSS, JavaScript, as well as frameworks such as
                    React and Angular. I am also experienced in working with
                    backend technologies such as Node.js, MongoDB.
                  </p>
                  <p className="text-xl">
                    Aside from coding, I enjoy keeping up-to-date with the
                    latest trends and developments in the web industry. I am
                    always looking for new challenges and opportunities to learn
                    and grow as a developer.
                  </p>
                  <p className="text-xl">
                    If you're interested in working together, feel free to reach
                    out and let's create something amazing!
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 xs:col-span-12">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title lg:text-4xl xs:text-3xl font-bold mb-5">
                    Skills
                  </h2>
                  <p className="text-xl">
                    Delivering high quality and well-performant websites that
                    solves your business problem with the latest technologies .
                  </p>

                  <div className="mt-5">
                    <div className="grid grid-cols-12 gap-2 ">
                      {skills.map((skill) => (
                        <div className="lg:col-span-4 xs:col-span-6">
                          <div className="border-2 px-3 py-2 rounded-lg flex justify-center items-center gap-2 ">
                            {skill?.icon}
                            <h1 className="text-base font-bold">
                              {skill?.title}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
