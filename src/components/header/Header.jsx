import React from "react";
import ME from "../../assets/img/me.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content pt-20 grid justify-center md:grid-cols-2">
        <div className="header__img bg-cyan-400 mx-10 w-[20rem] h-[27rem] shadow-lg mb-8">
          <img className=" h-[23rem] mt-10 object-cover" src={ME} alt="me" />
        </div>
        <div className="header__text px-9">
          <h3 className="text-3xl tracking-[0.2rem] intro__text text-slate-300 font-bold">
            Welcome to my{" "}
            <small className="text-cyan-300 text-3xl">Home. </small>
          </h3>
          <h5 className="text-2xl text-slate-300 tracking-[1.1rem] leading-[2.2rem] mt-12">
            you're just at the right place😊
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
