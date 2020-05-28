import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SurveyPage from './become-an-intern/SurveyPage';
import { RegisterationForm } from './become-an-intern/RegisterationForm';

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={RegisterationForm} path='/registeration-form' />
        <Route component={SurveyPage} path='/' />
      </>
    );
  }
}

export default Router;
