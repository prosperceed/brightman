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
        <div className="header__text text-center tracking-wide leading-[2rem]">
          <h3 className="text-4xl text-white font-bold">
            Welcome To My{" "}
            <small className=" uppercase">
              Domain. I look forward to working with you😂
            </small>{" "}
          </h3>
          {/* <h4 className="text-3xl text-white">I am glad YOU visited</h4> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
