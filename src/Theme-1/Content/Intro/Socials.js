import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Socials() {
  const socials = [
    { link: "", icon: <BsGithub /> },
    { link: "", icon: <BsInstagram /> },
    { link: "", icon: <BsLinkedin /> },
  ];
  return (
    <div className="flex justify-end md:justify-start w-full items-center text-lg space-x-5 pt-2">
      {socials.map((social, i) => (
        <a
          href={social.link}
          target="_blank"
          key={i}
          className="hover:scale-95"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;
