import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './home-page/LandingPage';
import JoinMission from './join-the-mission/JoinMission';
import About from './about-page/About';
import SurveyPage from './become-an-intern/SurveyPage';
import RegistrationForm from './become-an-intern/RegistrationForm';
import Facilitators from "./components/Facilitators";
import PastInterns from "./pastinterns/pastinterns";
import Admin from "./admin-dashboard/admin";

export class Router extends Component {
  render() {
    return (
      <>
        <Route exact component={LandingPage} path='/' />
        <Route component={About} path='/about' />
        <Route component={RegistrationForm} path='/registration-form' />
        <Route component={SurveyPage} path='/take-a-survey' />
        <Route component={JoinMission} path='/join-the-mission' />
        <Route component={Facilitators} path="/facilitators" />
        <Route component={PastInterns} path="/past-interns" />
        <Route component={Admin} path="/admin" />
      </>
    )
  }
}

export default Router
