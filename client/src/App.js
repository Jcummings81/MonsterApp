import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Auth from './modules/Auth'


class App extends Component {
state = { auth: Auth.isUserAuthenticated() }

  render() {
    return (
      <Router>


      </Router>
   
    );
  }
}

export default App;
