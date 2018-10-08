import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response, obj) => {
  console.log(response);
  obj.props.history.push('/SearchUsers');
}

class SignUp extends Component {

  render() {
    return (
      <div>
        <FacebookLogin
          appId="272999636649657"
          autoLoad={true}
          fields="name,email,picture"
          callback={e=>responseFacebook(e, this)} />
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