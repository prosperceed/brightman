import React from "react";
import "./about.css";
import vid1 from "../../assets/vid/vid.mp4";
import img2 from "../../assets/img/img2.jpg";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  {
    img: require("../../assets/img/img4.jpg"),
    caption: "Unknown known",
  },
  {
    img: require("../../assets/img/img1.jpg"),
    caption:
      "In my next world, I would choose you. Open up to me to be with you forever❤",
  },
  {
    img: require("../../assets/img/img2.jpg"),
    caption:
      "My Love, my treasure, my joy. My love for you expands like the sea",
  },
];

const About = () => {
  return (
    <div className="about__container mt-10" id="about">
      <h3 className="text-4xl text-slate-400 text-center my-10">About Me</h3>
      <div className="about__content grid grid-col-12 lg:grid-cols-2 justify-center items-center mx-10">
        <div className="about__text text-slate-200">
          <h5 className="text-[1rem] mr-3">
            Chikwelu Bright aka(Brightmarn )is a Nigeria entrepreneur ,a Forex
            trader and film director and producer. He is best known for his
            video directed at a production company, Brightmarn Studios, which
            creates short films for social media platforms such as YouTube. The
            films target a young audience and typically feature a turn of events
            which teaches the protagonist a moral lesson.
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

        <div className="gallery__card shadow-md rounded-xl w-[20rem] h-[30rem] shadow-black bg-white">
          <Zoom
            scale={0.4}
            arrows={false}
            autoplay={true}
            transitionDuration={600}
            duration={3500}
            infinite={true}
          >
            {images.map((image, index) => (
              <div className="" key={index}>
                <img
                  className="w-full h-[30rem] object-cover me rounded-xl"
                  src={image.img}
                />
                <h4 className="text-2xl text-center mt-6 text-white">
                  {image.caption}
                </h4>
              </div>
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
