import React from "react";
import logo from "../../../logo.webp";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Nav from "./Nav";

const Header = ({ onClick, display }) => {
  return (
    <header>
      <div className="header-stripe"></div>
      <div className="header white">
        <Link to="/" className="pointer flex-center">
          <img src={logo} alt="Bleck Engineering Logo" className="logo" />
        </Link>
        <Nav onClick={onClick} display={display} />
        <a href="#" data-target="slide-out" className="sidenav-trigger menu">
          <FiMenu color="#8b2d22" size={30} />
        </a>
      </div>
    </header>
  );
};
export default Header;
