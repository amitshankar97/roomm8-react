import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/home/home';
import SignUp from './components/signUp';
import Profile from './components/profile/profile';
import SignIn from './components/signIn/signIn';
import SearchUsers from './components/searchUsers/searchUsers';
import SignUpPage from './components/newProfile/SignUpPage';
import Preferences from './components/newProfile/Preferences';


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
          <Route path="/SignUpPage" component={SignUpPage} />
          <Route path="/Preferences" component={Preferences} />
        </div>
      </Router>
    );
  }
}

export default App;
