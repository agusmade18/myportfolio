import React, { useEffect } from "react";
import menus from "../MenuLists";

import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import Theme from "../Theme/Theme";

function ListMenu({ changeTheme, theme }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative hidden md:flex font-Montserrat text-base h-full justify-end items-center w-full">
        <ul className="inline-flex space-x-4 w-full h-full justify-end">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="inline-flex justify-center w-fit items-center space-x-1 drop-shadow-xl cursor-pointer whitespace-nowrap hover:scale-90 transition duration-500"
            >
              <span>{menu.icon}</span>
              <p>{t(`menus${i}`)}</p>
            </li>
          ))}
          <div className="border bg-science-blue-50 rounded-3xl w-[0.1px] h-[50%] my-auto"></div>
          <Theme theme={theme} changeTheme={changeTheme} />
          <div className="border bg-science-blue-50 rounded-3xl w-[0.1px] h-[50%] my-auto"></div>

          <div className="relative top-0 left-0 flex z-50 flex-col justify-start items-center my-auto w-[4rem] h-10 space-y-2">
            <Language theme={theme} />
          </div>
        </ul>
      </div>
    </>
  );
}

export default ListMenu;
