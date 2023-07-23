import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import avatar from "../../../assets/images/avatar.png";
import Socials from "./Socials";
import WOW from "wowjs";
import "animate.css";

function Intro() {
  const { t } = useTranslation();
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    // Gunakan top 4rem untuk header fixed
    <section id="home">
      <div
        className={`relative md:fixed top-0 left-0 h-full md:w-[30%] w-full my-auto mx-auto overflow-hidden md:shadow-2xl`}
      >
        <div className="w-[80%] mx-auto h-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex justify-center items-center w-full py-5 wow animate__animated animate__zoomIn">
              {/* <Line /> */}
              <img src={avatar} className="max-w-lg w-44 h-44" />
            </div>
            <div className="flex flex-col justify-start items-start md:py-10 pb-5 space-y-2 md:space-y-3 w-full md:justify-center md:items-center md:text-center wow animate__animated animate__zoomIn">
              <p className="text-base md:text-sm font-Montserrat">
                {t("text")}
              </p>
              <p className="text-4xl md:text-3xl font-Oswald drop-shadow-xl">
                I Made Agus Suyasa
              </p>
              <p className="text-base md:text-lg font-Montserrat tracking-wide text font-extrabold drop-shadow-lg">
                Junior Front End Developer
              </p>
              <p className="text-sm font-Montserrat tracking-wide mt-2 font-extrabold">
                {t("description")}
              </p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
