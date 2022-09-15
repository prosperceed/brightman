import React from "react";
import ME from "../../assets/img/me.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content pt-20 grid grid-cols-1 justify-center md:grid-cols-2 ">
        <div className="header__img sm:justify-center bg-cyan-400 mx-10 w-[20rem] h-[27rem] shadow-lg mb-8">
          <img className=" h-[23rem] mt-10 object-cover" src={ME} alt="me" />
        </div>
        <div className="header__text w-full tracking-[.2rem] leading-[2rem]">
          <h3 className="text-5xl text-white font-bold">
            I am <small className="text-cyan-400 uppercase">Bright</small>{" "}
          </h3>
          <h4 className="text-3xl text-white">A professional videographer</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
