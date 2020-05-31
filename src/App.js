import React from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter as Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Route>
      <Switch>
      <Router />
      </Switch>
    </Route>
     
  );
}

export default App;
