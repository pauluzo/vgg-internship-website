import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
export class Router extends Component {
  render() {
    return (
      <>
        <Route component={JoinMission} path='/mission' />
      </>
    );
  }
}

export default Router;
