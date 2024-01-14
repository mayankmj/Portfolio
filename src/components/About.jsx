import React from "react";
import { Link } from "react-scroll";
import { CgFileDocument } from "react-icons/cg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  const AboutData = [
    {
      id: 1,
      icon:<FaAward />,
      heading: "Experience",
      details: "3+ years",
    },
    {
      id: 2,
      icon: <FiUsers />,
      heading: "Work",
      details: "10+ projects",
    },
    {
      id: 3,
      icon: <VscFolderLibrary />,
      heading: "Projects",
      details: "6+ years",
    },
  ];
  const about_des="I'm a full stack web developer with a deep understanding of web technologies and a keen eye for detail. I love planning projects from scratch and executing them till deployment. I'm passionate about building beautiful and functional websites that meet the needs of my clients.";
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="mb-12 text-justify text-lg">{about_des}</div>
        <div className="flex justify-center md:gap-20 gap-8">
          {AboutData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center gap-2 md:w-1/6 w-1/3 py-4 border-2 rounded-xl transform transition duration-300 ease-in-out hover:scale-105 border-gray-800 hover:border-white"
            >
              <div className="mb-2 text-2xl px-auto">{item.icon}</div>
              <div className="mb-1 text-sm">{item.heading}</div>
              <div className="text-lg text-neutral-500 font-semibold">{item.details}</div>
            </div>
          ))}
        </div>
        <div className="py-3 flex justify-center mt-4">
         <div>
            <a
              href="https://drive.google.com/file/d/1fpxcdUhl6RoTwlF2m6A30Zq0KEtKCVg5/view?usp=sharing"
              smooth
              target="_blank"
              duration={500}
              className="group text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition duration-100 ease-in-out transform hover:scale-105"
            >
              Resume
              <span>
                <CgFileDocument size={20} className="ml-1 mt-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
