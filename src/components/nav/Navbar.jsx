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
    <nav className="navbar__container  rounded-full shadow-md shadow-cyan-300 ">
      <ul className="nav__ul">
        <li
          onClick={() => setActive("#")}
          className={
            active === "#" ? "active__nav animate-pulse rounded-full " : ""
          }
        >
          <a href="#">
            {" "}
            <HiOutlineHome className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li
          onClick={() => setActive("#videos")}
          className={
            active === "#videos"
              ? "active__nav animate-pulse rounded-full "
              : ""
          }
        >
          <a>
            <HiVideoCamera className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li
          onClick={() => setActive("#contact")}
          className={
            active === "#contact"
              ? "active__nav animate-pulse rounded-full "
              : ""
          }
        >
          <a href="#contact">
            <HiOutlinePhone className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li
          onClick={() => setActive("#about")}
          className={
            active === "#about" ? "active__nav animate-pulse rounded-full " : ""
          }
        >
          <a href="#about">
            <SiAboutdotme className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
        <li
          onClick={() => setActive("#team")}
          className={
            active === "#team" ? "active__nav animate-pulse rounded-full " : ""
          }
        >
          <a>
            <HiUsers className="text-[1.2rem] text-cyan-300" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
