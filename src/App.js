import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/home';
import SignUp from './components/signUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/SignUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
