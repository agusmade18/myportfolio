import React from "react";
import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";
function Theme({ theme, changeTheme }) {
  return (
    <>
      <div className="inline-flex justify-center items-center text-2xl text-buttered-rum-400 cursor-pointer">
        <button
          onClick={() => {
            changeTheme();
          }}
        >
          {theme === "light" ? <ImSun /> : <MdDarkMode />}
        </button>
      </div>
    </>
  );
}

export default Theme;
