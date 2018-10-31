import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/logos/roomm8-white-logo-cropped.png';

class Navbar extends Component {

    render() {
        let { user } = this.props.state;
        
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                        <Link className="navbar-brand link-logo" to="/"><img src={Logo} className="nav-logo" alt="roomm8 logo" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/SearchUsers">Search</Link>
                                </li>
                            </ul>
                            {!user.info ?
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/SignUp">Sign Up</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Login">Login</Link>
                                </li>
                            </ul> :
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Profile">MyProfile</Link>
                                </li>
                                <li className="nav-item active">
                                    {user.info = null}
                                    <Link className="nav-link" to="/">Log out</Link>
                                </li>
                            </ul>
                            } 
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}


export default connect(mapStateToProps)(Navbar);