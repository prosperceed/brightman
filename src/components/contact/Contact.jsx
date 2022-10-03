import React, { useRef } from "react";
import "./contact.css";
import Address from "./Address";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ghxx7l",
        "template_70kouj2",
        form.current,
        "A142HPPNVEECn4Ola"
      )
      .then(
        (result) => {
          document.getElementById("form").reset();
          setTimeout(() => {
            setMessage("Message sent!");
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setMessage(`${error.text} occured!`);
        }
      );
  };

  return (
    <div className="my-6 contact max-w-[50rem] mx-auto" id="contact">
      <h4 className="text-center text-slate-400 text-2xl mb-10">Contact me</h4>

      <div className="grid justify-center content-center items-center gap-y-10 md:w-full md:grid-cols-2">
        <Address />
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-cyan-4 mx-auto flex items-center"
          id="form"
        >
          <div class=" flex-wrap items-center mb-6">
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                class="contact__input appearance-none block bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-1 md:py-3 md:px-8 mb-3 leading-tight focus:outline-none focus:bg-white required"
                name="name"
                type="text"
                placeholder="Bright"
              />
            </div>
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                class="contact__input appearance-none block  bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-1 md:py-3 md:px-8 mb-3 leading-tight focus:outline-none focus:bg-white required"
                name="name"
                type="text"
                placeholder="Chikwelu"
              />
            </div>
            <div class=" md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                class="contact__input appearance-none block bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-1 md:py-3 md:px-8 mb-3 leading-tight focus:outline-none focus:bg-white required"
                name="email"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div class="px-3">
              <label class="block uppercase tracking-wide text-cyan-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none required"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div class="">
              <button
                class="md:w-11/12 ml-3 transition-all delay-100 shadow-lg hover:shadow-black bg-cyan-400 hover:bg-transparent hover:border border-blue-900 focus:shadow-outline focus:outline-none text-white text-center font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            {message ? (
              <p
                className={
                  message.error
                    ? "bg-red-700 py-3 text-gray-300 text-center mt-5"
                    : "bg-green-700 py-3 transition-all delay-75 text-gray-300 text-center rounded-md mt-5"
                }
              >
                {message}
              </p>
            ) : (
              ""
            )}
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
