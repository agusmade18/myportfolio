import React from "react";
import { useTranslation } from "react-i18next";
import { FcBusinessman } from "react-icons/fc";
import react from "../../../assets/images/react.png";
import laravel from "../../../assets/images/laravel.png";
import tailwind from "../../../assets/images/tailwind.webp";
import phpmyadmin from "../../../assets/images/phpmyadmin.png";

function Profile() {
  const { t } = useTranslation();
  const tecs = [
    {
      img: react,
      alt: "React Js",
    },
    {
      img: tailwind,
      alt: "Tailwind CSS",
    },
    {
      img: laravel,
      alt: "Laravel",
    },
    {
      img: phpmyadmin,
      alt: "PhpMyAdmin",
    },
  ];
  return (
    <section
      id="profile"
      className="relative top-4 pt-[5rem] pb-10 left-0 mx-auto w-[90%]"
    >
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-center items-center space-x-3 h-full border p-2 rounded-xl shadow-2xl">
          <div className="text-4xl flex justify-center items-center h-full">
            <FcBusinessman />
          </div>
          <p className="text-2xl font-Oswald tracking-widest font-extrabold text drop-shadow-lg">
            {t("profile")}
          </p>
        </div>
        <p className="mt-4 font-Montserrat tracking-wide text-base">
          {t("desProfil")}
        </p>
        <div className="flex flex-wrap justify-center items-center mx-auto md:mx-0 space-x-5 mt-4 badge h-fit p-3 rounded-3xl shadow-lg">
          {tecs.map((tec, i) => (
            <div
              className="cursor-pointer hover:scale-105 transition duration-300 "
              key={i}
            >
              <img src={tec.img} className="max-h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
