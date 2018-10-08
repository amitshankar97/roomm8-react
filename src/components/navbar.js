import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                        <Link className="navbar-brand lead" to="/">roomm8</Link>
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
                                    <Link className="nav-link" to="/SignUp">Sign Up</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/SignIn">Sign In</Link>
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