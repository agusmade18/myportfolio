import React from "react";
import imgPortfolio from "../../../assets/images/portfolio.png";

function Portfolio() {
  return (
    <section className="mt-16 mx-2" id="portfolio">
      <div className="relative sm:hidden block bg-transparent">
        <div className="absolute -top-16 left-5">
          <div className="flex justify-center items-center w-full sm:w-1/2">
            <img
              src={imgPortfolio}
              alt="Profile Image"
              className=" max-w-sm max-h-sm w-36 transform transition duration-500 hover:rotate-12"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-wrap p-5 lg:p-10 bg-gradient-to-b from-gray-900 to-gray-600 rounded-3xl shadow-2xl">
        <div className="flex flex-col space-y-7 w-full sm:w-1/2 text-slate-200">
          <p className="font-Oswald text-4xl lg:text-5xl sm:text-left text-right">
            <span className="w-full border border-slate-100 mr-3 rounded-t-lg rounded-b-lg"></span>
            Portfolio
          </p>
          <div className="text-lg font-Roboto space-y-4">
            <p className="mt-5">
              This is a little about the job that I have done. if you have
              something to say, don't hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="justify-center items-center w-full sm:w-1/2 hidden sm:flex">
          <img
            src={imgPortfolio}
            alt="Profile Image"
            className=" max-w-sm max-h-sm w-3/4"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
