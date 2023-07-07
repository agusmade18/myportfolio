import React, { useState, useEffect } from "react";
import "./style.css";
import TextTransition, { presets } from "react-text-transition";
import { Link, animateScroll as scroll } from "react-scroll";

function Intro() {
  const TEXTS = ["Hallo..", "Hi..", "こんにちは。。", "Om Swastyastu"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="content">
        <div className="w-fit p-2 bg-white text-black font-Oswald lg:text-4xl text-2xl md:text-3xl rounded-lg">
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
        <p className="mt-3 font-Golos text-xl text-orange-400 lg:text-3xl md:text-2xl">
          My Name is
        </p>
        <p className="font-Oswald text-3xl md:text-5xl lg:text-6xl">
          I Made Agus Suyasa
        </p>
        <p className="font-Ubuntu text-white text-sm mt-2 md:text-lg lg:text-2xl leading-7 lg:leading-10 lg:pr-10">
          I am a simple website application developer. I like photography and
          videography using my smartphone. From{" "}
          <span className="lg:text-white rounded-md p-2 text-xs font-extrabold text-yellow-500 lg:bg-yellow-500 lg:text-lg">
            BEGINNER
          </span>{" "}
          I will continue to learn to become{" "}
          <span
            className="lg:text-white text-red-500 rounded-md p-2 text-xs font-extrabold lg:bg-red-500 uppercase lg:text-lg
          "
          >
            proficient
          </span>
        </p>
        <Link
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          to="about"
          className="p-3 bg-yellow-500 mt-5 w-fit rounded-lg text-gray-800 shadow-2xl px-5 cursor-pointer"
        >
          See More
        </Link>
      </div>
    </section>
  );
}

export default Intro;
