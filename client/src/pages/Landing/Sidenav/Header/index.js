import React from "react";
import logo from "../../../../logo.webp";

const Header = (onClick, display) => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="logo" className="sidenav-logo" />
    </div>
  );
};

export default Header;
