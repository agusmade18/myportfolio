import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../../../../assets/images/portfolio/undanganOL/intro.jpg";
import "animate.css";
import { Link, animateScroll as scroll } from "react-scroll";
import BoxName from "./BoxName";
import "./style.css";
import Countdown from "./Countdown";
import { allData } from "./Data";

function Intro({ changePosition }) {
  const search = useLocation().search;
  const nama = new URLSearchParams(search).get("nama");

  // useEffect((console.log(allData), []));

  return (
    <>
      <section id="home" className="">
        <div
          className="relative changeBg mx-auto h-screen w-full rounded-lg flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-wrap items-start lg:items-center justify-center bg-gradient-to-b from-black to-transparent w-full h-full mx-auto p-5 ">
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
              <p className="text-4xl p-2 lg:text-6xl md:text-5xl text-center -ml-20 font-GreatVibes font-extrabold text-slate-300 text-shadow-2xl animate__animated animate__slideInLeft animate__slower">
                {allData[0].boy_shortName}
              </p>
              <p className="text-7xl p-2 mt-2 md:text-5xl text-amber-400 font-GreatVibes text-center font-extrabold text-shadow-lg animate__animated animate__slideInDown animate__slower">
                &
              </p>
              {/* <p className="text-4xl lg:text-6xl ml-20 text-center font-GreatVibes font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 text-shadow-2xl animate__animated animate__slideInRight animate__slower"> */}
              <p className="text-4xl p-2 lg:text-6xl md:text-5xl ml-20 text-center font-GreatVibes font-extrabold text-slate-300 text-shadow-sm animate__animated animate__slideInRight animate__slower">
                {allData[0].girl_shortName}
              </p>
              <p className="text-lg lg:text-xl text-center font-bold font-Oswald text-white mt-5 text-shadow-xl animate__animated animate__slideInUp animate__slower">
                {allData[0].strTime}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
              <div className="mt-3">
                <Countdown />
              </div>
              <div className="w-full px-5 py-2">
                <BoxName nama={nama} />
              </div>
              <Link
                href="about"
                className={`text-white border-black w-1/2 text-center mx-auto hover:bg-amber-900 hover:text-slate-300 z-10 border-2 rounded-lg px-5 py-2 bg-amber-600 opacity-90 font-Oswald text-lg font-bold animate__animated animate__pulse animate__slower animate__infinite`}
                to="about"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
                onClick={changePosition}
              >
                See Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
