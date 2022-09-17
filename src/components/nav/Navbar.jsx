import React, { useState } from "react";
import "./navbar.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiVideoCamera } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState("#");

  return (
    <nav className="navbar__container rounded-xl shadow-md shadow-cyan-300 ">
      <ul className="nav__ul">
        <li>
          <a
            href="#"
            onClick={() => setActive("#")}
            className={active === "#" ? "text-red-800 rounded-full" : ""}
          >
            {" "}
            <HiOutlineHome className=" text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li>
          <a className="hover:bg-slate-800 hover:rounded-full" href="">
            <HiVideoCamera className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="">
            <HiOutlinePhone className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="#about">
            <SiAboutdotme href="" className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li>
          <a href="">
            <HiUsers className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
