import React, { Component } from 'react';
import { connect } from 'react-redux';
import './roommate-profile.css';
import { Link } from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div></div>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Profile);
