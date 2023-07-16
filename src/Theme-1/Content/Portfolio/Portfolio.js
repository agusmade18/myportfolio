import React from "react";
import { useTranslation } from "react-i18next";
import { FcTimeline } from "react-icons/fc";
import PortfolioLists from "./PortfolioLists";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <section
      id="portfolio"
      className="relative top-0 mt-10 pb-5 left-0 mx-auto w-[90%]"
    >
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center space-x-3 h-full border p-2 rounded-xl shadow-2xl">
          <div className="text-4xl flex justify-center items-center h-full">
            <FcTimeline />
          </div>
          <p className="text-2xl font-Oswald tracking-widest font-extrabold text drop-shadow-lg">
            {t("portfolio")}
          </p>
        </div>
        <p className="mt-4 font-Montserrat tracking-wide text-base">
          {t("desPortfolio")}
        </p>
        <PortfolioLists />
      </div>
    </section>
  );
}

export default Portfolio;
