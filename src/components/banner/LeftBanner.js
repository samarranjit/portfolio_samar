import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {SiNodedotjs,SiCplusplus,SiAdobe } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web-Developer,", "Graphic Designer,", "Motion Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2500,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-6xl xl:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize sm:inline-block ">Samar Ranjit,</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I strive hard to get 1% better everyday!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/samarranjit" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.instagram.com/rnzt_samar" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://twitter.com/rnzt_samar" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/samarranjit/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiAdobe />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
