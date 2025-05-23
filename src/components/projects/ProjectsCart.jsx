import React from "react";

import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ProjectsCart = ({ title, desc, src, gitHubLink, liveLink }) => {
  return (
    <div className=" w-full h-auto p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className=" w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className=" w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className=" w-full mt-5">
        <div className=" flex justify-between items-center">
          <h3 className=" text-base text-designColor uppercase">{title}</h3>
          <div className=" flex gap-2">
            <span className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </span>
            <span className=" text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </span>
          </div>
        </div>
        <div>
          <p className=" text-xl font-bold tracking-wide mt-3 hover:text-gray-100 duration-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCart;
