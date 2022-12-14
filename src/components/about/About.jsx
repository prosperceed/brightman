import React from "react";
import "./about.css";
import vid1 from "../../assets/vid/vid.mp4";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BiLineChart } from "react-icons/bi";
import { HiFilm } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
import Project from "../project/Project";

const About = () => {
  return (
    <div className="about__container mt-10" id="about">
      <h3 className="text-2xl text-slate-400 text-center my-10">About Me</h3>
      <div className="about__content grid md:grid-cols-2 justify-center mx-8">
        <div className="about__text text-slate-200">
          <h5 className="text-[1rem] mr-3 py-3">
            Chikwelu Bright aka (Brightmarn) is a Nigeria entrepreneur, a Forex
            trader, a film director and producer. He is best known for his video
            directed at a production company, Brightmarn Studios, which creates
            short films for social media platforms such as YouTube. The films
            target a young audience and typically feature a turn of events which
            teaches the protagonist a moral lesson.
          </h5>
        </div>
        <div className="about__card animate-slideright text-slate-300 text-center mb-4">
          <div className="grid animate-slideup grid-cols-2 justify-center items-center gap-4 md:grid-cols-3">
            <div className="experience py-[1rem] hover:translate-y-1 hover:translate-x-2 bg-blue-900 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <BiLineChart className="text-[2rem] w-full mx-auto text-slate-300" />
              <h4 className="text-1xl font-bold py-2 text-center mx-4">
                Forex Trader
              </h4>
            </div>

            <div className="experience py-[1rem] hover:translate-x-1 hover:translate-y-[-0.5rem]  bg-blue-900 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <HiFilm className="text-[2rem] w-full mx-auto text-slate-300" />

              <h4 className="text-1xl font-bold py-2 text-center mx-4">
                Filming and Directing
              </h4>
            </div>
            <div className="experience py-[1rem] hover:translate-x-[-0.9rem]  bg-blue-900 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <IoLogoYoutube className="text-[2rem] w-full mx-auto text-red-600" />

              <h4 className="text-1xl font-bold py-2 text-center mx-4">
                Professional Youtuber
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="vid__section w-full bg-gradient-to-tr from-slate-700 to-cyan-500 relative">
        <video
          className="about__vid w-full  h-[42rem] mix-blend-overlay object-cover"
          src={vid1}
          autoPlay
          muted
          loop
        ></video>

        <div className="absolute leading-[1rem] tracking-[0.1rem] top-[12rem] ml-6">
          <h4 className="text-white text-4xl font-bold mb-6">
            We don't just write scripts <br />
            We Act!
          </h4>
          <a
            className="transition px-8 py-3 bg-white rounded-[2rem] hover:text-slate-200 hover:bg-cyan-500 my-10]"
            href="https://www.youtube.com/c/BRIGHTMARNSTUDIO1425/featured"
            target="_blank"
          >
            Watch videos
          </a>
        </div>
      </div>
      <div className="gallery__section flex flex-col items-center mt-4 pb-20">
        <Project />
      </div>
    </div>
  );
};

export default About;
