import React from "react";
import { useTranslation } from "react-i18next";
import Line from "./Line";
import avatar from "../../../assets/images/avatar.png";
import Socials from "./Socials";

function Intro() {
  const { t } = useTranslation();
  return (
    // Gunakan top 4rem untuk header fixed
    <div
      className={`relative top-0 left-0 h-full w-full mx-auto overflow-hidden`}
    >
      <div className="w-[80%] mx-auto">
        <div className="flex-col-reverse flex md:flex-row flex-wrap justify-between items-center h-full w-full">
          <div className="flex flex-col justify-start items-start md:py-10 pb-5 space-y-2">
            <p className="text-base font-Montserrat">{t("text")}</p>
            <p className="text-4xl md:text-5xl font-Oswald drop-shadow-xl">
              I Made Agus Suyasa
            </p>
            <p className="text-base md:text-xl font-Montserrat tracking-wide text font-extrabold drop-shadow-lg">
              Junior Front End Developer
            </p>
            <p className="text-sm md:text-base font-Montserrat tracking-wide mt-2 font-extrabold">
              {t("description")}
            </p>
            <Socials />
          </div>

          <div className="flex justify-center items-start h-full py-5">
            {/* <Line /> */}
            <img src={avatar} className="max-w-lg w-44 h-44" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
