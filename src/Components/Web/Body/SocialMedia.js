import React, { useState } from "react";
import ig from "../../../assets/images/icons/ig.png";
import igbw from "../../../assets/images/icons/ig-bw.png";
import fb from "../../../assets/images/icons/fb.png";
import fbbw from "../../../assets/images/icons/fb-bw.png";
import tiktok from "../../../assets/images/icons/tk.png";
import tiktokbw from "../../../assets/images/icons/tk-bw.png";
import yt from "../../../assets/images/icons/yt.png";
import ytbw from "../../../assets/images/icons/yt-bw.png";
import gt from "../../../assets/images/icons/gt.png";
import gtbw from "../../../assets/images/icons/gt.png";

function SocialMedia() {
  const [showIg, setShowIg] = useState(true);
  const [showFb, setShowFb] = useState(true);
  const [showTk, setShowTk] = useState(true);
  const [showYt, setShowYt] = useState(true);
  const [showGt, setShowGt] = useState(true);

  const medSos = [
    {
      icon: ig,
      iconBw: igbw,
      link: "",
      funcFalse: () => {
        setShowIg(false);
      },
      funcTrue: () => {
        setShowIg(true);
      },
      varIcon: showIg,
    },
    {
      icon: fb,
      iconBw: fbbw,
      link: "",
      funcFalse: () => {
        setShowFb(false);
      },
      funcTrue: () => {
        setShowFb(true);
      },
      varIcon: showFb,
    },
    {
      icon: tiktok,
      iconBw: tiktokbw,
      link: "",
      funcFalse: () => {
        setShowTk(false);
      },
      funcTrue: () => {
        setShowTk(true);
      },
      varIcon: showTk,
    },
    {
      icon: yt,
      iconBw: ytbw,
      link: "",
      funcFalse: () => {
        setShowYt(false);
      },
      funcTrue: () => {
        setShowYt(true);
      },
      varIcon: showYt,
    },
    {
      icon: gt,
      iconBw: gtbw,
      link: "",
      funcFalse: () => {
        setShowGt(false);
      },
      funcTrue: () => {
        setShowGt(true);
      },
      varIcon: showGt,
    },
  ];
  return (
    <div className="w-full p-2 flex justify-center items-center space-x-3 sm:space-x-5">
      {medSos.map((md, i) => (
        <div
          key={i}
          onMouseEnter={md.funcFalse}
          onMouseLeave={md.funcTrue}
          className={`relative sm:w-16 sm:h-16 w-10 h-10 cursor-pointer `}
        >
          <a href={md.link} target="_blank">
            <img
              src={md.iconBw}
              className="transition-opacity duration-500 hover:opacity-0"
            />
            <div
              className={`absolute w-fit h-fit top-0 left-0 right-0 bottom-0 ${
                md.varIcon ? "opacity-0" : "opacity-100"
              } transition-opacity duration-500 hover:opacity-100`}
            >
              <img src={md.icon} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default SocialMedia;
