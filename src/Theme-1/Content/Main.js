import React from "react";
import { useTranslation } from "react-i18next";
import Intro from "./Intro/Intro";
import Profile from "./Profile/Profile";
import Separator from "./Separator/Separator";

function Main({ theme }) {
  const { t } = useTranslation();
  return (
    // Gunakan top 4rem untuk header fixed
    <div className={`${theme} w-full h-full`}>
      <Intro />
      <Separator theme={theme} />
      <Profile />
    </div>
  );
}

export default Main;
