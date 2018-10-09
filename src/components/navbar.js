import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/logos/roomm8-white-logo-cropped.png';

class Navbar extends Component {

    render() {
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
                                    <Link className="nav-link" to="/SearchUsers">Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/Profile">Profile</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/SignUp">Login</Link>
                                </li>
                            </ul>
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