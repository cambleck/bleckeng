import React from "react";
import AccountDropdown from "./AccountDropdown";
import "./index.css";

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
      <a
        class="dropdown-trigger footer-button"
        href="./"
        data-target="dropdown1"
      >
        {renderProfileCircle()}
        <div className="username font-400">cambleck</div>
        <i className="material-icons">arrow_drop_down</i>
      </a>
      <AccountDropdown />
    </div>
  );
};

export default Footer;
