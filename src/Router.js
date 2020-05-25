import React, { Component } from "react";
import { Route } from "react-router-dom";
import JoinMission from "./join-the-mission/JoinMission";
import Facilitators from "./components/Facilitators";

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={JoinMission} path="/mission" />
        <Route exact path="/facilitators" component={Facilitators} />
      </>
    );
  }
}

export default Router;
