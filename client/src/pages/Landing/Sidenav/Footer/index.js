import React from "react";
import AccountDropdown from "./AccountDropdown";
import "./index.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const renderProfileCircle = () => {
  return (
    <div className="profile-circle">
      <i className="material-icons">person</i>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <FaInstagram />
      <FaFacebook />
      <FaTwitter />
    </div>
  );
};

export default Footer;
