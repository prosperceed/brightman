import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Address = () => {
  return (
    <div className="address__card overflow-hidden max-w-[22rem] mx-auto h-[27.3rem] bg-cyan-400 rounded-lg shadow-lg drop-shadow-lg shadow-black">
      <div className="card">
        <div className="card__details">
          <div className="flex flex-col justify-center content-center py-12 gap-6 ">
            <h4 className="text-gray-200 flex mx-5 mt-5 items-center gap-2">
              <FaSearchLocation className="text-7xl text-cyan-400 border-2 border-cyan-400 p-4 bg-gray-200 rounded-md" />
              No:1 Ezechi street ibusa roadAsaba delta Nigeria
            </h4>

            <h4 className="text-gray-200 flex mx-5 mt-5 items-center gap-2">
              <BsFillTelephoneForwardFill className="text-6xl text-cyan-400 border-2 border-cyan-400 p-4 bg-gray-200 rounded-md" />
              +2347034711535 +22956458998
            </h4>

            <h4 className="text-gray-200 flex mx-5 mt-5 items-center gap-2">
              <FaEnvelope className="text-[4rem] text-cyan-400 border-2 border-cyan-400 p-4 bg-gray-200 rounded-md" />
              brightstoneltd1425@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
