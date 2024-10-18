import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Creative Leo of the Year"
            subTitle="Leo Club International"
            result="2023"
            des="Awarded the Most Creative Leo of the Year award as a recognition for the efforts done towards enhancing the digital reach of Leo Club."
          />
          <ResumeCard
            title="Outstanding Delegate Award"
            subTitle="Xavier International Model United Nations (XIMUN)"
            result="2023"
            des="Represented United States in the DISEC Committee of XI Model United Nations; awarded as the Outstanding Delegate."
          />
          <ResumeCard
            title="Cleanest Code Award"
            subTitle="Xavier International Hackathon"
            result="2022"
            des="Recognized for the cleanest and most organized code among 15 competing groups. "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner"
            subTitle="English Speech Competition"
            result="2019"
            des="Winner of 2019- Interschool English Speech Competition among 17 different schools organized by Organization of Private School (OPS)"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
