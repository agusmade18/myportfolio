import React from "react";
import { useTranslation } from "react-i18next";
import Intro from "./Intro/Intro";
import Profile from "./Profile/Profile";
import Separator from "./Separator/Separator";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./ Contact/ Contact";
import Footer from "../Footer/Footer";

function Main({ theme }) {
  const { t } = useTranslation();
  return (
    // Gunakan top 4rem untuk header fixed
    <div className={`${theme} w-full h-full`}>
      <div className="flex w-full justify-start items-start md:flex-row flex-col">
        <div className="md:w-[30%] w-full md:h-screen h-full flex justify-center items-center">
          <Intro />
        </div>
        <div className=" w-full flex justify-center items-center md:hidden">
          <Separator theme={theme} />
        </div>
        <div className="md:w-[70%] w-full">
          <Profile />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
