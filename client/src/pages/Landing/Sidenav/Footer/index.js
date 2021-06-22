import React from "react";
import _ from "lodash";
import AccountDropdown from "./AccountDropdown";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { socialList } from "../Body/itemsList";

const renderProfileCircle = () => {
  return (
    <div className="profile-circle">
      <i className="material-icons">person</i>
    </div>
  );
};
const SocialList = ({ list }) => {
  return _.map(list, ({ icon, href, label }) => {
    return (
      <a
        className=""
        style={{
          color: "#8b2d22",
          margin: 3,
        }}
        to={href}
        key={label}
      >
        <span className="flex-center" style={{ marginRight: 4 }}>
          {icon}
        </span>
      </a>
    );
  });
};

const Footer = () => {
  return (
    <div className="footer flex-center column">
      <div className="flex-center">
        <SocialList list={socialList} />
      </div>
      <div
        style={{
          fontSize: 10,
          letterSpacing: 0,
          margin: 10,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        © 2021 Bleck Engineering Company, Inc.
      </div>
    </div>
  );
};

export default Footer;
