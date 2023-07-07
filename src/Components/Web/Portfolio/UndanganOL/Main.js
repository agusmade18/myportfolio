import React, { useState } from "react";
import Intro from "./Intro";
import About from "./About";

function Main() {
  const [position, setPosition] = useState(false);
  const changePosition = () => {
    setPosition(true);
  };
  return (
    <div
      className={`${
        position ? "w-full h-full relative" : "w-screen h-screen fixed"
      }`}
    >
      <Intro changePosition={changePosition} />
      <About />
    </div>
  );
}

export default Main;
