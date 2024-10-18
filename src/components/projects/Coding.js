import React from 'react';
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

function Coding() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Starbucks Clone"
          des="Clone Website of popular brand- Starbucks; made using HTML, CSS and Javascript."
          src={projectOne}
          github= "https://github.com/samarranjit/starbucks_clone"
          website =   "https://starbucks-clone.samarranjit.com.np/"
          code = {true}
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="An aesthetic Tic-Tac-Toe Multiplayer game!"
          src={projectTwo}
          github= "https://github.com/samarranjit/tic-tac-toe"
          website =   "https://tictactoe.samarranjit.com.np/"
          code = {true}

        />
        <ProjectsCard
          title="Jobs Portal"
          des="An aesthetic dark theemed responsive job advertisement portal"
          src="https://raw.githubusercontent.com/samarranjit/jobsportal/refs/heads/gh-pages/assets/logo.png"
          github="https://github.com/samarranjit/jobsportal"
          website="https://jobsportal.samarranjit.com.np/"
          code = {true}

        />
        
      </div>
  )
}

export default Coding