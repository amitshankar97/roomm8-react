import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login'
import './signUp.css'
import Logo from '../assets/logos/roomm8-black-logo-cropped.png';

const responseFacebook = (response, obj) => {
  console.log(response);
  obj.props.history.push('/SearchUsers');
}

class SignUp extends Component {

  render() {
    return (
        <div className="text-center sign-up-container">
            <h1> Welcome to </h1>
            <img src={Logo} alt="roomm8 Logo" width="30%" height="30%"/>
            <br /> <br />
            <div>
            <div className="btn-group">
                <a className='btn btn-primary disabled'><i className="fa fa-facebook social-icon"></i></a>
                
                <FacebookLogin
                appId="272999636649657"
                autoLoad={true}
                fields="name,email,picture"
                callback={e => responseFacebook(e, this)}
                cssClass="btn btn-primary social-link" />
            </div>
            <br /> <br />
            <div className="btn-group">
                <a className='btn btn-danger disabled'><i className="fa fa-google-plus social-icon"></i></a>
                <a className='btn btn-danger social-link' href=''> Sign up with Google</a>
            </div>
            <br /> <br />
            <div className="btn-group">
                <a className='btn btn-info disabled'><i className="fa fa-twitter social-icon"></i></a>
                <a className='btn btn-info social-link' href=''> Sign up with Twitter</a>
            </div>
            </div>
            <br /> <br />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      state: state
  }
}

export default connect(mapStateToProps)(SignUp);