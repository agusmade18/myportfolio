import React from "react";
import "animate.css";

function BoxName({ nama }) {
  return (
    <div className="animate__animated animate__fadeIn animate__slower">
      <div className="border-2 border-black rounded-lg h-24 text-center my-3 py-2 shadow-2xl bg-white">
        <p className="text-sm">Kpd. yth</p>
        <p className="font-bold text-xl mt-3">{nama}</p>
      </div>
    </div>
  );
}

export default BoxName;
