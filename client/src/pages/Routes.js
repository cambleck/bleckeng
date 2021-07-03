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
const History = loadable(() => import("./Landing/History"));

const FourZeroFour = loadable(() => import("./404"));

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        exaxt
        path="/history"
        component={() => <Landing display={HISTORY} />}
      />
      <Route exact path="/login" component={Admin} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};
