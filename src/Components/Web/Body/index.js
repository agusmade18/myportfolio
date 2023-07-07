import React from "react";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./style.css";

function index() {
  return (
    <div>
      <Hero />
      <div>
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default index;
