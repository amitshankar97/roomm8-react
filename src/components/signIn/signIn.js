import React, { Component } from 'react';
import { connect } from 'react-redux';
import './signIn.css'
import Logo from './bootstrap-solid.svg';


class SignIn extends Component {
    render() {
        return (
            <div className="text-center sign-in-container">
                <form className="form-signin">
                    <img src={Logo} height="72px" width="72px" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control email" placeholder="Email address" required="" autoFocus="" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control pwd" placeholder="Password" required="" />
                    <div className="checkbox mb-3">
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(SignIn);