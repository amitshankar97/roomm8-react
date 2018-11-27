import React, { Component } from 'react';
import validateInput from './validateSignUp';
import TextFieldGroup from './TextFieldGroup';
import './Form.css'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }


    onSubmit(e) {
        e.preventDefault();
        let validationResult = validateInput(this.state);
        if (validationResult.isValid) {
            this.props.signUpRequest(this.state);
        }
        
        this.setState(validationResult);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign Up</h1>

                        <TextFieldGroup
                            error={errors.username}
                            label="Username"
                            onChange={this.onChange}
                            checkUserExists={this.checkUserExists}
                            value={this.state.username}
                            field="username"
                        />

                        <TextFieldGroup
                            error={errors.email}
                            label="Email"
                            onChange={this.onChange}
                            checkUserExists={this.checkUserExists}
                            value={this.state.email}
                            field="email"
                        />

                        <TextFieldGroup
                            error={errors.password}
                            label="Password"
                            onChange={this.onChange}
                            value={this.state.password}
                            field="password"
                            type="password"
                        />

                        <TextFieldGroup
                            error={errors.passwordConfirmation}
                            label="Password Confirmation"
                            onChange={this.onChange}
                            value={this.state.passwordConfirmation}
                            field="passwordConfirmation"
                            type="password"
                        />

                        <div className="form-group">
                            <button className="btn btn-primary btn-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default SignupForm;