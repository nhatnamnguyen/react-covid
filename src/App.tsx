import React from 'react';
import './App.css';
import Global from './global/Global';
import Country from './country/Country';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
      <Route exact path="/" component={Global}/>
      <Route path="/country" component={Country}/>
  </Router>
  );
}

export default App;
