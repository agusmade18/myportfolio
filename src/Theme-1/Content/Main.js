import React from "react";
import { useTranslation } from "react-i18next";

function Main({ theme }) {
  const { t } = useTranslation();
  return (
    // Gunakan top 4rem untuk header fixed
    <div className={`relative top-0 left-0 h-full w-full mx-auto ${theme}`}>
      <div className="w-[80%] flex flex-col justify-start items-start mx-auto py-10 space-y-2">
        <p className="text-base font-Montserrat">{t("text")}</p>
        <p className="text-4xl md:text-5xl font-Oswald drop-shadow-xl">
          I Made Agus Suyasa
        </p>
        <p className="text-base md:text-xl font-Montserrat tracking-wide text font-extrabold">
          Junior Front End Developer
        </p>
        <p className="text-sm md:text-base font-Montserrat tracking-wide mt-2 font-extrabold">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export default Main;
