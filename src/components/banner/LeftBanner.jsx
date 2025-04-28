import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebookF, FaFigma, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaWordpressSimple } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import Resume from "../../assets/images/Mamunur - Frontend - Developer.pdf";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "WordPress Developer.",
      "Frontend Developer.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-full lgl:w-1/2">
      <div className=" flex flex-col gap-3 pb-20">
        <h4 className=" text-lg font-normal capitalize">welcome to my world</h4>
        <h1 className=" text-3xl  md:text-4xl mdl:text-5xl font-bold text-white">
          Hi, I am{" "}
          <span className=" text-designColor capitalize"> mamunur roshid</span>
        </h1>
        <h2 className=" text-2xl mdl:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className=" text-sm md:text-base">
          Motivated Web Developer with a solid foundation in HTML, CSS,
          Bootstrap, JavaScript, React.js, Vue.js, Node.js, WordPress, and
          Tailwind CSS. Demonstrates hands-on experience with responsive design
          and modern web technologies. Eager to leverage problemsolving skills
          and fresh insights to craft dynamic, usercentric web solutions.
        </p>
      </div>
      <div className=" flex flex-col xl:flex-row gap-6 lgl:gap-12 justify-between">
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className=" flex gap-4">
            <a
              href="https://www.facebook.com/mamunroshid93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="https://x.com/roshidmamun9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mamunroshid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className=" text-base uppercase font-titleFont mb-4">
            best skill on
          </h2>
          <div className=" flex flex-wrap gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
            <span className="bannerIcon">
              <FaWordpressSimple />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <RiPhpFill />
            </span>
            <span className="bannerIcon">
              <RiFirebaseLine />
            </span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-28">
        <button
          className="px-6 py-3 bg-designColor text-white font-semibold rounded-lg shadow-md 
                 hover:bg-red-900 hover:scale-105 transform transition-transform 
                 duration-300 ease-in-out focus:outline-none focus:ring-2 
                 focus:ring-blue-400 focus:ring-offset-2"
        >
          <a
            href={Resume}
            // download="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default LeftBanner;
