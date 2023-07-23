import React, { useRef, useEffect, useState } from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import WOW from "wowjs";
import "animate.css";

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [proses, setProses] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      message.trim().length === 0 ||
      name.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert(t("alert"));
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_MAIL_JS_SERVICE_ID,
          process.env.REACT_APP_MAIL_JS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_MAIL_JS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setProses(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section
      id="contact"
      className="relative top-0 mt-10 pb-5 left-0 mx-auto w-[90%] h-full overflow-auto"
    >
      <div className="flex flex-col justify-center items-start wow animate__animated animate__zoomIn">
        <div className="flex justify-center items-center space-x-3 h-full border p-2 rounded-xl shadow-2xl">
          <div className="text-4xl flex justify-center items-center h-full">
            <FcPhoneAndroid />
          </div>
          <p className="text-2xl font-Oswald tracking-widest font-extrabold text drop-shadow-lg">
            {t("contact")}
          </p>
        </div>
        <p className="mt-4 font-Montserrat tracking-wide text-base">
          {t("desContact")}
        </p>
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <div className="mt-3 flex flex-col justify-start items-start w-full space-y-3">
            <div className="flex justify-center items-center w-full font-Montserrat space-x-2">
              <label className="w-[23%] md:w-[12%] text-sm">
                {t("formName")}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                  if (
                    message.trim().length !== 0 &&
                    name.trim().length !== 0 &&
                    email.trim().length !== 0
                  ) {
                    setProses(false);
                  } else {
                    setProses(true);
                  }
                }}
                name="from_name"
                className="w-[77%] bg-science-blue-50 md:w-[50%] px-3 text-science-blue-950 py-2 rounded-md"
              />
            </div>
            <div className="flex justify-center items-center w-full font-Montserrat space-x-2">
              <label className="w-[23%] md:w-[12%] text-sm">
                {t("formEmail")}
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (
                    message.trim().length !== 0 &&
                    name.trim().length !== 0 &&
                    email.trim().length !== 0
                  ) {
                    setProses(false);
                  } else {
                    setProses(true);
                  }
                }}
                name="email"
                className="w-[77%] bg-science-blue-50 md:w-[50%] px-3 text-science-blue-950 py-2 rounded-md"
              />
            </div>
            <div className="flex justify-center items-center w-full font-Montserrat space-x-2">
              <label className="w-[23%] md:w-[12%] text-sm">
                {t("formMessage")}
              </label>
              <textarea
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (
                    message.trim().length !== 0 &&
                    name.trim().length !== 0 &&
                    email.trim().length !== 0
                  ) {
                    setProses(false);
                  } else {
                    setProses(true);
                  }
                }}
                className="w-[77%] bg-science-blue-50 md:w-[50%] px-3 text-science-blue-950 py-2 rounded-md"
                rows={4}
              ></textarea>
            </div>
          </div>
          <div className="mt-4 flex justify-end w-full">
            <button
              type="submit"
              disabled={proses ? "disabled" : ""}
              className="enabled:button cursor-pointer disabled:bg-[#BDBDBD] px-3 py-2 text-sm rounded-md hover:scale-90 transition duration-300 disabled:scale-100"
            >
              {t("formSend")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
