import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="htts://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="htts://github.com" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UCMYDq9o_vC_79CPGAuZJPSg"
        target="https://www.youtube.com/channel/UCMYDq9o_vC_79CPGAuZJPSg"
      >
        <GrYoutube />
      </a>
    </div>
  );
};

export default HeaderSocials;
