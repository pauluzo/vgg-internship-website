import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SurveyPage from './become-an-intern/SurveyPage';
import { RegistrationForm } from './become-an-intern/RegistrationForm';

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={RegistrationForm} path='/registration-form' />
        <Route component={SurveyPage} path='/take-a-survey' />
      </>
    );
  }
}

export default Router;
