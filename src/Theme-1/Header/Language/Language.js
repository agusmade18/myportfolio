import React, { useEffect, useState } from "react";
import i18n from "../../../i18n";
import en from "../../../assets/images/icons/english.png";
import ja from "../../../assets/images/icons/japan.png";
import id from "../../../assets/images/icons/indonesia.png";
import { LANGUAGES } from "./LanguageLists";

function Language({ theme }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (
      localStorage.getItem("lan") === "undefined" ||
      !localStorage.getItem("lan")
    ) {
      localStorage.setItem("lan", "en");
    }
    // console.log("Load " + localStorage.getItem("theme"));
  }, []);
  return (
    <>
      <div className="flex justify-start items-center space-x-1 space-y-2 w-fit h-full">
        {LANGUAGES.map(
          (lan, i) =>
            localStorage.getItem("lan") === lan.code && (
              <button
                key={i}
                className="flex justify-center items-center space-x-1 bg-transparent border-none hover:scale-95 duration-300 transform"
                onClick={onClick}
              >
                <img src={lan.icon} className="md:w-5 md:h-5 h-6 w-6" />
                <p className="text-xs font-extrabold hidden md:block">
                  {lan.label}
                </p>
              </button>
            )
        )}
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } absolute top-[2.2rem] right-0 md:left-0 w-fit md:w-full p-3 border rounded-xl transform duration-300 z-50 ${theme}`}
      >
        <ul className="flex flex-col justify-center items-center w-full h-full space-y-3">
          {LANGUAGES.map((lan, i) => (
            <li key={i} className="">
              <button
                className="flex justify-center items-center space-x-1 w-full px-3 link"
                onClick={() => {
                  i18n.changeLanguage(lan.code);
                  localStorage.setItem("lan", lan.code);
                  setOpen(false);
                }}
              >
                <img src={lan.icon} className="w-5 h-5" />
                <p>{lan.label}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-screen z-0`}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </>
  );
}

export default Language;
