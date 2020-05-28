import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { RegisterationForm } from './become-an-intern/RegisterationForm';
export class Router extends Component {
  render() {
    return (
      <>
        <Route component={RegisterationForm} path='/registeration-form' />
      </>
    );
  }
}

export default Router;
