import React from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="relative top-[4rem] left-0 w-full h-screen overflow-y-auto">
      {t("text")}
    </div>
  );
}

export default Main;
