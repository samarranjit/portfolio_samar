import React , {useState} from 'react'
import Title from '../layouts/Title'
import Coding from './Coding';
import Design from './Design';

const Projects = () => {
  const [codingData, setCodingData] = useState(true);
   const [designData, setDesignData] = useState(false);
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
      


      <div>
        <ul className="mb-10 w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setCodingData(true) &
              setDesignData(false) 
            }
            className={`${
              codingData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Coding
          </li>
          <li
            onClick={() =>
              setCodingData(false) &
              setDesignData(true)
            }
            className={`${
              designData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Designing
          </li>
          
        </ul>
      </div>


      { codingData && <Coding/> }
      {designData && <Design/>}
      
    </section>
  );
}

export default Projects