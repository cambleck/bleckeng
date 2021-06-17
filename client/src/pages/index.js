import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Sidenav from "../general/Sidenav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <body>
          <Header />
          <Sidenav
            onClick={(display) => this.changeDisplay(display)}
            display={display}
          />
          <div className="main myContainer">
            <main>{Routes()}</main>
          </div>
          <Footer />
        </body>
      </BrowserRouter>
    </div>
  );
};

export default App;
