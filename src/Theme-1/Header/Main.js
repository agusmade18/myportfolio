import React from "react";
import ListMenuDesktop from "./Desktop/ListMenu";
import ListMenuMobile from "./Mobile/ListMenu";

function Main({ theme, changeTheme }) {
  return (
    <div
      className={`relative z-50 top-0 left-0 w-full h-[4rem] shadow-xl ${theme}`}
    >
      <div className={`w-[95%] md:w-[80%] h-full mx-auto`}>
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex justify-start items-center w-full h-full">
            <div className="rounded-full flex justify-center items-center">
              <p className="text-2xl md:text-3xl font-Oswald drop-shadow-xl">
                <span
                  className={`${
                    theme === "dark"
                      ? "text-buttered-rum-400"
                      : "text-buttered-rum-50"
                  }`}
                >
                  Agus
                </span>
                Made
                {/* {t("top_bar_title")} */}
              </p>
            </div>
          </div>
          {/* DESKTOP */}
          <ListMenuDesktop changeTheme={changeTheme} theme={theme} />
          <ListMenuMobile changeTheme={changeTheme} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Main;
