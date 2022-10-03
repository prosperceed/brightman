import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer__section relative w-full grid gap-4 items-center justify-center py-4 border-t border-blue-900 shadow-2xl shadow-black px-4">
      <h3 className="text-cyan-300 text-center text-lg md:text-2xl font-bold">
        Brightmarn
      </h3>
      <div className="socials flex justify-center space-x-4">
        <a href="" className="text-blue-600">
          <BsFacebook className="text-xl md:text-3xl" />
        </a>
        <a href="" className="text-green-700">
          <BsWhatsapp className="text-xl md:text-3xl" />
        </a>
        <a
          href="https://youtube.com/c/BRIGHTMARNSTUDIO1425"
          target="_blank"
          className="text-red-700"
        >
          <BsYoutube className="text-xl md:text-3xl" />
        </a>
      </div>
      <p className="text-sm capitalize md:text-base text-gray-300">
        copy Right &copy; Bright Chikwelu | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
