import React from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import PastIntern from './past-intern/pastIntern';



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
