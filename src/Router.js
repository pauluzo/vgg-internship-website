import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
import About from './about-page/About';

export class Router extends Component {
  render() {
    return (
      <>
        <Route component={JoinMission} path='/mission' />
        <Route component={About} path='/about' />
      </>
    );
  }
}

export default Router;
