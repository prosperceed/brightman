import React from "react";
import "./about.css";
import vid1 from "../../assets/vid/vid.mp4";
import img2 from "../../assets/img/img2.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import imageSlide from "../slide/imageSlide";
const images = [
  "../../assets/img/img1.jpeg",
  "../../assets/img/img3.jpg",
  "../../assets/img/img4.jpg",
];

const About = () => {
  return (
    <div className="about__container mt-10" id="about">
      <h3 className="text-4xl text-slate-400 text-center my-10">About Me</h3>
      <div className="about__content grid grid-col-12 lg:grid-cols-2 justify-center items-center mx-10">
        <div className="about__text text-slate-200">
          <h5 className="text-[1rem] mr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            laborum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam esse sapiente modi reprehenderit labore adipisci facilis nisi
            corporis nesciunt veritatis..
          </h5>
        </div>
        <div className="about__card text-slate-300 text-center mb-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="experience py-[1rem] w-[9rem]  bg-purple-800 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <h4 className=" text-2xl font-bold py-2 text-center">
                Experience
              </h4>
              <small className="align-left text-[1rem] ">My experience</small>
            </div>

            <div className="experience py-[1rem] w-[9rem]  bg-purple-800 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <h4 className=" text-2xl font-bold py-2 text-center">
                Experience
              </h4>
              <small className="align-left text-[1rem]">My Experience.</small>
            </div>

            <div className="experience py-[1rem] w-[9rem]  bg-purple-800 border border-slate-800 hover:bg-transparent shadow-xl rounded-md">
              <h4 className=" text-2xl font-bold py-2 text-center">
                Experience
              </h4>
              <small className="align-left text-[1rem]">My experience.</small>
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
            STREAM OUR THRILLING VIDEOS
          </h4>
          <button className="px-8 py-3 bg-white rounded-[2rem] hover:text-slate-200 hover:bg-cyan-500 my-10]">
            Watch videos
          </button>
        </div>
      </div>
      <div className="gallery__section flex flex-col items-center mt-4 pb-20">
        <h3 className="text-4xl text-slate-400 text-center mb-4">Gallery</h3>

        <div className="gallery__card shadow-md w-[20rem] h-[30rem] shadow-black bg-white">
          <img
            className="w-full h-full object-cover me rounded-xl"
            src={img2}
            alt=""
          />
          <h4 className="text-2xl text-center mt-6 text-white">
            This is me. About 20 years ago I took unbending decision to fashion
          </h4>

          <Zoom scale={0.4}>
            {images.map((each, index) => (
              <img className="w-full h-ful" key={index} src={each} />
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
