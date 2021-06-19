import React from "react";
import logo from "../../../../logo.webp";

const Header = (onClick, display) => {
  return (
    <div
      className="header"
      style={{ display: "flex", alignItems: "center", paddingTop: 10 }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: 140,
          height: 40,
          margin: "10px 20px",
          marginTop: 15,
          cursor: "pointer",
          paddingLeft: 10,
        }}
      />
    </div>
  );
};

export default Header;
