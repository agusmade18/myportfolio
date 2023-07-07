import React, { useState, useEffect, useRef } from "react";
import ListMenuDesktop from "./Desktop/ListMenu";
import ListMenuMobile from "./Mobile/ListMenu";
import { useTranslation } from "react-i18next";

function Main() {
  const [theme, setTheme] = useState("light");
  const prevTheme = usePrevious(theme);

  const { t } = useTranslation();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "undefined" ||
      !localStorage.getItem("theme")
    ) {
      localStorage.setItem("theme", "light");
    }
    setTheme(localStorage.getItem("theme"));

    // console.log("Load " + localStorage.getItem("theme"));
  }, []);

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    localStorage.setItem("theme", prevTheme);
    // console.log("Theme " + localStorage.getItem("theme"));
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current; //in the end, return the current ref value.
  }
  return (
    <div className={`fixed z-50 top-0 left-0 w-full h-[4rem] ${theme}`}>
      <div className={`w-[95%] md:w-[80%] h-full shadow-xl mx-auto`}>
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
