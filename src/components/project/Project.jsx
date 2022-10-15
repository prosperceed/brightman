import React from "react";
// import img1 from "../../assets/img/img1";
// import img2 from "../../assets/img/img2";
// import img3 from "../../assets/img/img3";

const Project = () => {
  return (
    <div id="project" className="max-w-[48rem] mx-auto project__section">
      <h3 className="text-2xl text-slate-400 text-center mb-4">Projects</h3>

      <div className="project__card grid md:grid-cols-2 gap-5 justify-between">
        <div className="project__content mt-8 h-[24rem] relative bg-gray-200 shadow-lg">
          <img
            className="w-[21rem] mx-auto my-3"
            src={require("../../assets/img/img1.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-14 hover:translate-y-3 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-center absolute bottom-[-2rem]">
            <h4 className="mr-6 text-base">
              Taking responsibility <small>series</small>
            </h4>
            <a
              href=""
              className="flex btn py-3 px-3 bg-blue-900 text-gray-200 text-sm rounded-3xl"
            >
              Watch..
            </a>
          </div>
        </div>

        <div className="project__content mt-8 h-[24rem] relative bg-gray-200 shadow-lg">
          <img
            className="w-[21rem] mx-auto my-3"
            src={require("../../assets/img/img1.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-14 hover:translate-y-3 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-center absolute bottom-[-2rem]">
            <h4 className="mr-6 text-base">
              Taking responsibility <small>series</small>
            </h4>
            <a
              href=""
              className="flex btn py-3 px-3 bg-blue-900 text-gray-200 text-sm rounded-3xl"
            >
              Watch..
            </a>
          </div>
        </div>

        <div className="project__content mt-8 h-[24rem] relative bg-gray-200 shadow-lg">
          <img
            className="w-[21rem] mx-auto my-3"
            src={require("../../assets/img/img3.jpg")}
            alt=""
          />
          <div className="card__items py-5 px-14 hover:translate-y-3 hover:px-3 transition delay-300 duration-300 ease-in-out bg-gray-200 flex items-center drop-shadow-lg rounded-md shadow-lg backdrop-blur-sm hover:shadow-blue-900 justify-center absolute bottom-[-2rem]">
            <h4 className="mr-6 text-base">
              Taking responsibility <small>series</small>
            </h4>
            <a
              href=""
              className="flex btn py-3 px-3 bg-blue-900 text-gray-200 text-sm rounded-3xl"
            >
              Watch..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
