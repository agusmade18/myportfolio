import React from "react";
import lists from "./Lists";
import { useTranslation } from "react-i18next";

function PortfolioLists() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full">
      {lists.map((list, i) => (
        <div className="w-full flex justify-center items-start space-x-2">
          <img
            src={list.image}
            className="rounded-full w-[8rem] h-[8rem] object-cover aspect-square object-top shadow-xl border-4 border-science-blue-50"
          />
          <div className="flex flex-col justify-start items-start font-Montserrat w-full">
            <p className="text-base font-extrabold drop-shadow-xl">
              {list.name}
            </p>
            <p className="text-sm mt-2">{t(`desPf${i}`)}</p>
            <div className="flex flex-wrap items-center justify-center text-xs mt-3 font-extrabold space-x-2">
              {list.tag.map((tag) => (
                <div className="badge rounded-md py-1 px-2">{tag}</div>
              ))}
            </div>
            <div className="flex justify-end w-full mt-4">
              <a href={list.link} target="_blank">
                <button className="button px-3 py-2 text-sm rounded-md hover:scale-90 transition duration-300">
                  {t(`btnPf${i}`)}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioLists;
