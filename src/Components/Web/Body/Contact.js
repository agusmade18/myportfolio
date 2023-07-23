import React from "react";
import imgContact from "../../../assets/images/contact.png";
import SocialMedia from "./SocialMedia";

function Contact() {
  return (
    <section className="mt-20 mx-2" id="contact">
      <div className="relative sm:hidden block">
        <div className="absolute -top-16 right-5">
          <div className="flex justify-center items-center w-full sm:w-1/2">
            <img
              src={imgContact}
              alt="Profile Image"
              className=" max-w-sm max-h-sm w-44 transform transition duration-500 hover:rotate-12"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-wrap p-5 lg:p-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl shadow-2xl">
        <div className="justify-center items-center w-full sm:w-1/2 hidden sm:flex">
          <img
            src={imgContact}
            alt="Profile Image"
            className=" max-w-sm max-h-sm w-3/4"
          />
        </div>
        <div className="flex flex-col text-slate-200 w-full sm:w-1/2">
          <div>
            <p className="font-Oswald text-4xl lg:text-5xl text-left">
              <span className="w-full border border-slate-100 mr-3 rounded-t-lg rounded-b-lg"></span>
              Contact
            </p>
          </div>
          <div className="mt-10">
            <div className="text-lg font-Roboto">
              <p>Contact me by filling out the form below</p>
            </div>
            <div className="flex flex-col space-y-1 mt-3 font-Roboto">
              <label className="lg:text-base text-sm">Name :</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                className="min-w-0 bg-science-blue-50 w-full lg:w-3/4 flex-auto rounded-md border-0 bg-gray-200 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-3 font-Roboto">
              <label className="lg:text-base text-sm">Email :</label>
              <input
                id="name"
                name="name"
                type="email"
                autocomplete="name"
                required
                className="min-w-0 bg-science-blue-50 w-full lg:w-3/4 flex-auto rounded-md border-0 bg-gray-200 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-3 font-Roboto">
              <label className="lg:text-base text-sm">Message :</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="min-w-0 bg-science-blue-50 w-full lg:w-3/4 flex-auto rounded-md border-0 bg-gray-200 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 text-sm"
                placeholder="Enter your email message"
              ></textarea>
            </div>
            <div className="mt-10 flex justify-end items-center w-full lg:w-3/4">
              <button className="px-5 py-3 border-pink-300 border bg-red-400 rounded-3xl text-white shadow-xl hover:bg-red-200 hover:text-gray-800 focus:ring-1 ">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-10">
          <div className="border border-white"></div>
        </div>
        <div className="w-full">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}

export default Contact;
