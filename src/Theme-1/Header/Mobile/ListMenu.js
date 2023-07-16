import React, { useState } from "react";
import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { FaAngleLeft } from "react-icons/fa";
import RightBar from "./RightBar";

function ListMenu({ changeTheme, theme }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  const closeBar = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="relative z-50 md:hidden font-Montserrat text-xl h-full w-full flex justify-end items-center space-x-5">
        <Theme theme={theme} changeTheme={changeTheme} />
        <Language theme={theme} />
        <button
          className={`text-xl w-fit h-fit link p-1 hover:rounded-full  ${
            open && "rotate-180"
          } transform transition duration-300`}
          onClick={onClick}
        >
          <FaAngleLeft />
        </button>
        <RightBar theme={theme} open={open} closeBar={closeBar} />
      </div>
    </>
  );
}

export default ListMenu;
