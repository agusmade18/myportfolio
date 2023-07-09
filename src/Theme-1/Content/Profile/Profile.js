import React from "react";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  return (
    <div className="relative top-0 pt-[5rem] pb-10 left-0 mx-auto h-full w-[80%]">
      <div className="flex flex-wrap justify-center items-center">
        <div className="hidden md:block"></div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-2xl font-Oswald tracking-widest font-extrabold">
            {t("profile")}
          </p>
          <p className="mt-4 font-Montserrat tracking-wide">{t("desProfil")}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
