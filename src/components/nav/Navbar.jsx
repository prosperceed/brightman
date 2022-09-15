import React from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { HiVideoCamera } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar__container flex rounded-xl shadow-md shadow-cyan-300">
      <ul className="justify-center text-center">
        <li>
          <a href="">
            {" "}
            <HiOutlineHome className=" text-2xl text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="">
            <HiVideoCamera className="text-2xl text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="">
            <HiOutlinePhone className="text-2xl text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="#about">
            <SiAboutdotme href="" className="text-2xl text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="">
            <HiUsers className="text-2xl text-cyan-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
