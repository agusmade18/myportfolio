import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/images/logo/logoppanjang.jpeg";
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setColor(!click);
  };
  const menus = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const closeMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={`${color ? "header header-color" : "header"}`}>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li> */}
          {menus.map((menu, i) => (
            <li className="nav-item cursor-pointer">
              <Link
                to={menu.link}
                spy={true}
                smooth={true}
                offset={-180}
                duration={500}
                onClick={closeMenu}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
