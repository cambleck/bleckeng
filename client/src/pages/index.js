import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Routes } from "./Routes";

import Footer from "../general/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <body>
          <main>{Routes()}</main>
          <Footer />
        </body>
      </BrowserRouter>
    </div>
  );
};

export default App;
