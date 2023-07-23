import React, { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";

function Separator({ theme }) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div
      className={`relative top-0 left-0 w-[80%] h-full mt-5 mx-auto wow animate__animated animate__zoomIn`}
    >
      <div
        className={`absolute rounded-2xl top-0 right-0 w-[70%] h-1 ${theme} separator`}
      ></div>
      <div
        className={`absolute rounded-2xl top-3 right-0 w-[50%] h-1 ${theme} separator`}
      ></div>
      <div
        className={`absolute rounded-2xl top-6 right-0 w-[30%] h-1 ${theme} separator`}
      ></div>
    </div>
  );
}

export default Separator;
