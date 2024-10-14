import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS - Computer Science"
            subTitle="Texas State University (August 2024 - Present)"
            // result=""
            graduated = {false}
            des={
              <>
                Currently Pursing my Bachelors Degree in Computer Science while exploring the horizon of my interests.
                <br />
                 Activities involved:
                <br />
                - ACM AI Club || - .EXE : Computer Science Club
              </>
            }
          />
          <ResumeCard
            title="High School - Science"
            subTitle="Xavier International Secondary School (2021 - 2023)"
            result="3.74/4.0"
            graduated = {true}
            des={
              <>
              Completed my High School studies from Xavier International Secondary School with Physics, Chemistry, Mathematics, Computer Science, English Literature and Nepali Literature.
              <br />
              <br />
              Activities and societies: 
              <br />
              Xavier Student's Council || Xavier Science, IT and Business Expo || Xavier International Model United Nations || Xavier Computer and Coding Club
              </>
            }
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Vibhuti Vidya Mandir (2007 - 2021)"
            result="4.0/4.0"
            graduated = {true}
            des={
              <>
                Studied General Courses and participated in several interschool and intraschool activities.
                <br />
                <br />
                Activities Involved:
                <br />
                School Captain || Interschool Quiz Competition || Interschool Debates || Vibhuti Eco Club
              </>
            }
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
