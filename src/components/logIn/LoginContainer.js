import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { userLogIn } from '../../actions/userLogInActions';


class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                <LoginForm  logInRequest={this.props.logInRequest} userState={this.props.user} />
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
        logInRequest: (data) => dispatch(userLogIn(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);