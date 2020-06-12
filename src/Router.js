import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
import About from './about-page/About';
import SurveyPage from './become-an-intern/SurveyPage';
import Facilitators from './components/Facilitators';
import PastInterns from './pastinterns/pastinterns';
import UseForm from './become-an-intern/UseForm';

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={About} path='/about' />
        <Route component={UseForm} path='/registration' />
        <Route component={SurveyPage} path='/take-a-survey' />
        <Route component={JoinMission} path='/join-the-mission' />
        <Route component={Facilitators} path='/facilitators' />
        <Route component={PastInterns} path='/past-interns' />
      </>
    );
  }
}

export default Router;
