import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SurveyPage from './become-an-intern/SurveyPage';
export class Router extends Component {
  render() {
    return (
      <>
        <Route component={SurveyPage} path='/' />
      </>
    );
  }
}

export default Router;
