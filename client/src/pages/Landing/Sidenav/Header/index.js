import React from "react";
import logo from "../../../../logo.webp";
import { AiOutlineClose } from "react-icons/ai";

const Header = (onClick, display) => {
  return (
    <div className="sidenav-header">
      <img src={logo} alt="logo" className="sidenav-logo brand-logo center" />
      <a
        href="#"
        data-target="slide-out"
        className="sidenav-close sidenav-cancel"
      >
        <AiOutlineClose color="black" size={28} />
      </a>
    </div>
  );
};

export default Header;
