import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import {
  HOME,
  BIDDING,
  CONTACT,
  HISTORY,
  PEOPLE,
  PROJECTS,
  RECENT,
  SERVICES,
} from "./pageTypes";

const Landing = loadable(() => import("./Landing"));
const Admin = loadable(() => import("./_Admin"));

const FourZeroFour = loadable(() => import("./404"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Landing display={HOME} />} />
      <Route
        exact
        path="/history"
        component={() => <Landing display={HISTORY} />}
      />
      <Route
        exact
        path="/services"
        component={() => <Landing display={SERVICES} />}
      />
      <Route
        exact
        path="/projects"
        component={() => <Landing display={PROJECTS} />}
      />
      <Route
        exact
        path="/people"
        component={() => <Landing display={PEOPLE} />}
      />
      <Route
        exact
        path="/contact"
        component={() => <Landing display={CONTACT} />}
      />
      <Route exact path="/login" component={Admin} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};
