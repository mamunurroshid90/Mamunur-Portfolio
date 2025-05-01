import React from "react";

// import ResumeCart from "./ResumeCart";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" flex flex-col lgl:flex-row justify-between items-center gap-10 lgl:gap-20"
    >
      <div className=" flex justify-center items-center w-full m-auto">
        <div className=" mt-10 p-5   h-[200px] border-2 border-red-800 rounded-md">
          <h3 className=" text-2xl font-bold md:text-4xl text-start">
            I have no industrial experience yet, I Try to join a best IT company
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
