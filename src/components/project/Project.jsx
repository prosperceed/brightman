import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="max-w-[47] md:max-w-[80rem] mx-auto animate-slideleft project__section"
    >
      <h3 className="text-2xl text-slate-400 text-center mb-4">Projects</h3>

      <div className="project__card place-items-center grid md:grid-cols-3 gap-x-5">
        <div className="project__content mt-8 w-[17rem] h-[24rem] bg-gray-200 shadow-lg">
          <img
            className="w-full mx-auto my"
            src={require("../../assets/img/img1.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-4 hover:rounded-none hover:translate-y-6 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-between">
            <p className="text-base">
              Taking responsibility <small>series</small>
            </p>
            <a href="" className="text-center text-base text-blue-700">
              Watch
            </a>
          </div>
        </div>

        <div className="project__content mt-8 w-[17rem] h-[24rem] bg-gray-200 shadow-lg">
          <img
            className="w-full mx-auto my"
            src={require("../../assets/img/img1.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-4 hover:rounded-none hover:translate-y-6 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-between">
            <p className=" text-base">
              Taking responsibility <small>series</small>
            </p>
            <a href="" className="text-center text-base text-blue-700">
              Watch
            </a>
          </div>
        </div>

        <div className="project__content mt-8 w-[17rem] h-[24rem] bg-gray-200 shadow-lg">
          <img
            className="w-full mx-auto my"
            src={require("../../assets/img/img1.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-4 hover:rounded-none hover:translate-y-6 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-between">
            <p className=" text-base">
              Taking responsibility <small>series</small>
            </p>
            <a href="" className="text-center text-base text-blue-700">
              Watch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
