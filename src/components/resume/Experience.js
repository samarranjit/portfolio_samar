import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">Jul 2023 - July 20242022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Joint Secretary"
            subTitle="Leo Club of Kathmandu Creative (Jul 2023 - Jul 2024)"
            result="Volunteer"
            des=""
          />
          <ResumeCard
            title="IT Chairman"
            subTitle="Leo Club of Kathmandu Creative - (2012 - 2016)"
            result="Volunteer"
            des="Handled all the digital activities of the club using skills in programming and designing for digital fundraising and social media promotion"
          />
          <ResumeCard
            title="Graphics and Motion Designer"
            subTitle="Cosmo Studio (Nov 2023 - Mar 2024)"
            result="Internship"
            des="Interned as a professional graphics and motion designer, acquiring the skills of graphic designing, motion designing and video editing"
          />
        </div>
      </div>
      <div>
        <div display="hidden" className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold"></h2> */}  
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Event Secretary"
            subTitle="Xavier Science, IT and Business Expo 2023"
            result=""
            des="Directed and coordinated the preparation and presentation of 25 different projects for the exhibition themed under 'Innovation with Sustainability'"
          />
          {/* <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
