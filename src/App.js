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
import PropertyProfile from './components/propertyProfile/propertyProfile';
import SignIn from './components/signIn/signIn';
import SearchUsers from './components/searchUsers/searchUsers';

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
          <Route path="/PropertyProfile/:propertyID" component={PropertyProfile} />
          <Route path="/SearchUsers" component={SearchUsers} />
        </div>
      </Router>
    );
  }
}

export default App;
