import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
import SurveyPage from './become-an-intern/SurveyPage';
import { RegistrationForm } from './become-an-intern/RegistrationForm';
import PastInterns from './views/PastInterns/PastInterns';

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={RegistrationForm} path='/registration-form' />
        <Route component={SurveyPage} path='/take-a-survey' />
        <Route component={JoinMission} path='/join-the-mission' />
        <Route component={PastInterns} path='/past-interns' />
      </>
    );
  }
}

export default Router;
