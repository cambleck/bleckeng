import React from "react";
import logo from "../../logo.webp";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="header-stripe"></div>
      <nav className="nav white">
        <Link to="/" className="pointer brand-logo center flex-center">
          <img src={logo} alt="Bleck Engineering Logo" className="logo" />
        </Link>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <FiMenu color="black" size={21} />
        </a>
      </nav>
    </header>
  );
};
export default Header;
