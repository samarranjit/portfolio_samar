import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Starbucks Clone"
          des="Clone Website of popular brand- Starbucks; made using HTML, CSS and Javascript."
          src={projectOne}
          github= "https://github.com/samarranjit/starbucks_clone"
          website =   "https://starbucks-clone.samarranjit.com.np/"
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="An aesthetic Tic-Tac-Toe Multiplayer game!"
          src={projectTwo}
          github= "https://github.com/samarranjit/tic-tac-toe"
          website =   "https://tictactoe.samarranjit.com.np/"
        />
        <ProjectsCard
          title="Jobs Portal"
          des="An aesthetic dark theemed responsive job advertisement portal"
          src="https://raw.githubusercontent.com/samarranjit/jobsportal/refs/heads/gh-pages/assets/logo.png"
          github="https://github.com/samarranjit/jobsportal"
          website="https://jobsportal.samarranjit.com.np/"
        />
        
      </div>
    </section>
  );
}

export default Projects