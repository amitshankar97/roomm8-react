import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { userSaveProfile } from '../../actions/userProfileActions';


class ProfileFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                <ProfileForm  saveProfileRequest={this.props.saveProfileRequest} userState={this.props.user} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => (
    {
        saveProfileRequest: (data) => dispatch(userSaveProfile(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormContainer);