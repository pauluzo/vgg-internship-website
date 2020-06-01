<<<<<<< HEAD
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
import SurveyPage from './become-an-intern/SurveyPage';
import { RegistrationForm } from './become-an-intern/RegistrationForm';
=======
import React, { Component } from "react";
import { Route } from "react-router-dom";
import JoinMission from "./join-the-mission/JoinMission";
import Facilitators from "./components/Facilitators";
>>>>>>> 3da86b04719cff90e3ad7406c8be07ecf936b33b

export class Router extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
        <Route component={RegistrationForm} path='/registration-form' />
        <Route component={SurveyPage} path='/take-a-survey' />
        <Route component={JoinMission} path='/join-the-mission' />
=======
        <Route component={JoinMission} path="/mission" />
        <Route exact path="/facilitators" component={Facilitators} />
>>>>>>> 3da86b04719cff90e3ad7406c8be07ecf936b33b
      </>
    );
  }
}

export default Router;
