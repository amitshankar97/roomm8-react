import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import history from './helpers/browserHistory';
import {ConnectedRouter} from 'connected-react-router';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import SignIn from './components/signIn/signIn';
import SearchUsers from './components/searchUsers/searchUsers';
import SignUpContainer from './components/signUp/SignUpContainer';
import PropertyFormContainer from './components/newProperty/PropertyFormContainer';
import ProfileFormContainer from './components/newProfile/ProfileFormContainer';
import LoginContainer from './components/logIn/LoginContainer';



class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Profile" component={Profile} />
          <Route path="/SearchUsers" component={SearchUsers} />
          <Route path="/SignUp" component={SignUpContainer} />
          <Route path="/SaveProperty" component={PropertyFormContainer} />
          <Route path="/SaveProfile" component={ProfileFormContainer} />
          <Route path="/LogIn" component={LoginContainer} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
