import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sayan-maity-8ba151220/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sayan9836" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/sayan-maity-8ba151220/"
        target="_blank"
        rel="noreferrer"
      >
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
