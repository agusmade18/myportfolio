import React, { useState } from "react";
import Language from "../Language/Language";
import Theme from "../Theme/Theme";
import { FcPrevious } from "react-icons/fc";
import RightBar from "./RightBar";

function ListMenu({ changeTheme, theme }) {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="relative z-50 md:hidden font-Montserrat text-xl h-full w-full flex justify-end items-center space-x-5">
        <Theme theme={theme} changeTheme={changeTheme} />
        <Language theme={theme} />
        <button
          className={`text-2xl bg-transparent w-fit h-fit link ${
            open && "rotate-180"
          } transform transition duration-300`}
          onClick={onClick}
        >
          <FcPrevious />
        </button>
        <RightBar theme={theme} open={open} />
      </div>
    </>
  );
}

export default ListMenu;
