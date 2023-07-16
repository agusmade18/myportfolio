import React from "react";
import menus from "../MenuLists";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";

function RightBar({ theme, open, closeBar }) {
  const { t } = useTranslation();
  return (
    <div
      className={`fixed w-[30%] h-screen top-[4rem] right-0 ${theme} ${
        open ? "translate-x-0" : "translate-x-96"
      } transition transform duration-300`}
    >
      <div className="flex flex-col justify-center items-center space-y-5 mt-5">
        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            key={i}
            onClick={closeBar}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-7 h-7 flex justify-center items-center">
                {menu.icon}
              </div>

              <p className="text-sm">{t(`menus${i}`)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RightBar;
