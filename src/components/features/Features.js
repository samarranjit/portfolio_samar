import React from 'react'
import {SiAdobe } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { FaCode, FaPython } from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I am proficient in MERN stack and have experience in working in full stack projects."
          icon={<FaCode/>}
          
          />
        <Card
          title="Graphic and Motion Design"
          des="I love designing social media posts and designs that include static as well as motion components."
          icon={<SiAdobe/>}

        />
        <Card
          title="Python Programming"
          des="I am enthusiastic about Python and I am actively investing into learning Python and its frameworks to explore its capabilities."
          icon={<FaPython />}
        />
      </div>
    </section>
  );
}

export default Features