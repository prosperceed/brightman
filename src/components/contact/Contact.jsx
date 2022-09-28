import React from "react";
import "./contact.css";
import Address from "./Address";

const Contact = () => {
  return (
    <div className="my-6 contact max-w-[50rem] mx-auto">
      <h4 className="text-center text-slate-400 text-2xl mb-10">Contact me</h4>

      <div className="grid  justify-center content-center items-center gap-y-10 md:w-full md:grid-cols-2">
        <Address />
        <form className="bg-cyan-4 mx-auto">
          <div class=" flex-wrap items-center mb-6">
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                class="appearance-none block bg-gray-200 text-cyan-700 border border-purple-500 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Bright"
              />
            </div>
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                class="appearance-none block  bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Chikwelu"
              />
            </div>
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                class="appearance-none block bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div class="px-3">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                id="message"
              ></textarea>
            </div>
            <div class="">
              <button
                class="md:w-11/12 ml-3 transition-all delay-100 shadow-lg hover:shadow-black bg-cyan-400 hover:bg-transparent hover:border border-blue-900 focus:shadow-outline focus:outline-none text-white text-center font-bold py-2 px-6 rounded"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="socials mx-auto max-w-2/1 bg-slate-300 opacity-70 shadow-md shadow-black opacity- mt-8 flex justify-between rounded-md">
        <h5 className="text-dark px-5 text-2xl font-bold">ICOns</h5>
        <h5 className="text-dark px-5 text-2xl font-bold">ICOns</h5>
        <h5 className="text-dark px-5 text-2xl font-bold">ICOns</h5>
      </div> */}
    </div>
  );
};

export default Contact;
