import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userSignUp } from '../../actions/userActions';


class SignUpContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                <SignUpForm  signUpRequest={this.props.signUpRequest} userState={this.props.user} />
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
        signUpRequest: (data) => dispatch(userSignUp(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);