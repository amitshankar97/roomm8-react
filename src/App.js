import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/home';
import SignUp from './components/signUp';
import Profile from './components/profile/profile';
import SignIn from './components/signIn/signIn';
import SearchUsers from './components/searchUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Profile" component={Profile} />
          <Route path="/SearchUsers" component={SearchUsers} />
        </div>
      </Router>
    );
  }
}

export default App;
