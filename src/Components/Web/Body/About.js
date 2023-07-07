import React from "react";
import photoProfile from "../../../assets/images/profile.jpg";
import { FaReact, FaLaravel, FaPhp, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import about from "../../../assets/images/about.png";

function About() {
  const tech = [
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
  ];
  return (
    <section className="" id="about">
      <div className="flex flex-wrap justify-center items-center w-full h-fit p-3">
        <div className=" justify-center items-center p-5 sm:w-1/2 hidden sm:flex">
          <a href="http://www.freepik.com">
            <img
              src={about}
              alt="Profile Image"
              className=" max-w-sm max-h-sm"
            />
          </a>
        </div>
        <div className="flex flex-col sm:w-1/2 text-white space-y-7 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-3 shadow-2xl">
          <div className="relative">
            <div className="absolute -top-24 right-0">
              <img
                src={photoProfile}
                alt="Profile Image"
                className=" max-w-sm max-h-sm w-36 h-36 border-4 border-slate-200 rounded-full transform transition duration-500 hover:rotate-12 hover:shadow-xl hover:shadow-cyan-200"
              />
            </div>
            <div className="relative">
              <p className="font-Oswald text-gray-100 text-4xl lg:text-5xl mt-3">
                <span className="w-full border border-white mr-3"></span> About
                Me{" "}
              </p>
              <div className="text-lg font-Roboto space-y-4 px-2">
                <p className="mt-5">
                  Hello, my name is I Made Agus Suyasa. Long enough?. So you can
                  call me Agus. It's a fun for me to do simple coding. It's like
                  a bit of a stress reliever when it's done perfectly. Step by
                  step I feel that simple things develop into complicated
                  things, that's when I enjoy how to solve them.
                </p>
                <p>
                  Now i'm working in Japan as a part-time worker. My job is
                  completely unrelated to Computer Sains or Programming. But if
                  i have a free time I always learn new things about
                  programming. I also made a simple website template for making
                  online wedding invitations
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="grid grid-cols-3 text-base pb-6">
                  {tech.map((dt, i) => (
                    <div
                      key={i}
                      className="flex justify-start items-center space-x-1 space-y-3 p-1"
                    >
                      <div className="pt-3">{dt.icon}</div>
                      <p>{dt.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
