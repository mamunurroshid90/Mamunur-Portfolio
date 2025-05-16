import React from "react";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className=" w-full lgl:w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-3xl md:text-4xl font-bold">Front-end Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">HTML</p>
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2"
            >
              <span className=" w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
            </motion.span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">CSS</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Bootstrap</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Tailwind css</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">SASS</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Javascript</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">TypeScript</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">React.Js</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Vue.Js</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Next.Js</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">WordPress</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2 py-12">
        <div className=" font-titleFont flex flex-col gap-4">
          <p className=" text-sm text-designColor tracking-[4px]">FEATURES</p>
          <h2 className=" text-3xl md:text-4xl font-bold">Back-end Skill</h2>
        </div>
        <div className=" mt-14 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Node.Js</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Express.Js</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">MongoDB</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Firebase</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[30%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Supabase</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">PHP</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">MySql</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[40%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="   text-md font-medium">Supabase</p>
            <span className=" w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
