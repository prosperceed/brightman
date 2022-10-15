import React from "react";
import ME from "../../assets/img/me.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content pt-20 grid justify-between md:justify-center md:grid-cols-2">
        <div className="header__img bg-cyan-400 mx-10 w-[20rem] h-[23rem] shadow-lg mb-8">
          <img
            className=" h-[22rem] rounded-full mx-auto w-[180px] object-cover"
            src={ME}
            alt="me"
          />
        </div>
        <div className="header__text mx-8 md:justify-center">
          <h3 className="text-2xl text-center mr-10 md:mr-0 md:text-justify tracking-[0.2rem] intro__text text-slate-300 font-bold">
            Welcome to{" "}
            <small className="text-cyan-300 text-2xl">
              {" "}
              Brightmarn Studio.{" "}
            </small>
          </h3>
          <h5 className="typed-out text-base md:text-[1.2rem] text-slate-300 tracking-[0.6rem] leading-[2.2rem] mt-12">
            <span> I make epic scripts</span>{" "}
            <span className=""> that transforms</span>
            <span> into inspiring</span>
            <span> movies😊</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
