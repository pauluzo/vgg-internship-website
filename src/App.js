import React from 'react';
import './App.css';
import Router from './Router';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {
  return (
    <Route>
      <Router />
    </Route>
  );
}

export default App;
