// CONTROLS THE PAGE SWITCHING

import React from "react";
import Home from "../Home";
import History from "../History";
import Services from "../Services";
import Projects from "../Projects";
import People from "../People";
import Contact from "../Contact";
import Bidding from "../Bidding";
import Recent from "../Recent";
import {
  HOME,
  BIDDING,
  CONTACT,
  HISTORY,
  PEOPLE,
  PROJECTS,
  RECENT,
  SERVICES,
} from "../../pageTypes";

const PageSwitch = ({ display }) => {
  switch (display) {
    case HOME:
      return <Home />;
    case "HISTORY":
      return <History />;
    case SERVICES:
      return <Services />;
    case PEOPLE:
      return <People />;
    case PROJECTS:
      return <Projects />;
    case CONTACT:
      return <Contact />;
    case BIDDING:
      return <Bidding />;
    case RECENT:
      return <Recent />;
    default:
      return "404";
  }
};

export default PageSwitch;
