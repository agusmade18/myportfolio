import React, { useEffect, useState, useRef } from "react";
import Header from "./Header/Main";
import Content from "./Content/Main";

function Main() {
  const [theme, setTheme] = useState("light");
  const prevTheme = usePrevious(theme);

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
    <div className={`relative top-0 left-0 w-full h-full p-0 m-0 z-0 ${theme}`}>
      <Header theme={theme} changeTheme={changeTheme} />
      <Content theme={theme} changeTheme={changeTheme} />
    </div>
  );
}

export default Main;
