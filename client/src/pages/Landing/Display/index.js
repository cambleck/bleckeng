// The Main view in the members login

import React from "react";
import PageSwitch from "./PageSwitch";
import "./index.css";

const Display = ({ display }) => {
  return (
    <div style={{ margin: 10 }} className="content font-secondary">
      <div className="page-container">
        <PageSwitch display={display} />
      </div>
    </div>
  );
};

export default Display;
