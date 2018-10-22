import React, { Component } from 'react'
import validateInput from './validation'


class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            sex: "",
            aboutme: "",
            cleanly: "",
            parking: "",
            pets: "",
            roommates: "",
            room: "",
            guests: "",
            budget: "",
            smoke: "",
            drink: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let validationResult = validateInput(this.state);
        if (validationResult.isValid) {
            //submit 
        }
        this.setState(validationResult);
        console.log(this.state);
    }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Lets Create Your Profile!</h1>
                <div className="form-group">
                    <label className="control-label">First Name</label>
                    <input
                        value={this.state.firstName}
                        onChange={this.onChange}
                        type="text"
                        name="firstName"
                        className="form-control"
                    />
                    {errors.firstName && <div className="help-block">{errors.firstName}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <input
                        value={this.state.lastName}
                        onChange={this.onChange}
                        type="text"
                        name="lastName"
                        className="form-control"
                    />
                    {errors.lastName && <div className="help-block">{errors.lastName}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                        className="form-control"
                    />
                    {errors.email && <div className="help-block">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">Age</label>
                    <input
                        value={this.state.age}
                        onChange={this.onChange}
                        type="number"
                        name="age"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">What is your maximum budget for a room?</label>
                    <input
                        value={this.state.budget}
                        onChange={this.onChange}
                        type="number"
                        name="budget"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>What is your sex?</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value="male" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value="female" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sex" id="inlineRadio3" value="other" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio3">Other</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Do you smoke?</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="smoke" id="inlineRadio4" value="true" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio4">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="smoke" id="inlineRadio5" value="false" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio5">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="smoke" id="inlineRadio6" value="" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio6">Prefer not to say</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Do you drink?</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="drink" id="inlineRadio7" value="true" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio7">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="drink" id="inlineRadio8" value="false" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio8">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="drink" id="inlineRadio9" value="" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio9">Prefer not to say</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Do you have any pets?</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="pets" id="inlineRadio10" value="true" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio10">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="pets" id="inlineRadio11" value="false" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio11">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="pets" id="inlineRadio12" value="" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio12">Prefer not to say</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Do you need a parking space?</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="parking" id="inlineRadio13" value="true" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio13">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="parking" id="inlineRadio14" value="false" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio14">No</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="parking" id="inlineRadio15" value="" onChange={this.onChange} />
                            <label className="form-check-label" for="inlineRadio">Prefer not to say</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label> How cleanly are you?
                    <select class="custom-select" value={this.state.value} onChange={this.onChange} name="cleanly">
                            <option value="" selected>Please select option...</option>
                            <option value="notvery">Not very</option>
                            <option value="somewhat">Somewhat</option>
                            <option value="very">Very</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> How often will you have guests over?
                    <select class="custom-select" value={this.state.value} onChange={this.onChange} name="guests">
                            <option value="" selected>Please select option...</option>
                            <option value="never">Never</option>
                            <option value="oneortwo">Once or twice a week</option>
                            <option value="threeormore">Three or more times a week</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> What is the maximum roommate amount you would like?
                        <select class="custom-select" value={this.state.value} onChange={this.onChange} name="roommates">
                            <option value="" selected>Please select option...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> How would you like to rent a room?
                        <select class="custom-select" value={this.state.value} onChange={this.onChange} name="room">
                            <option value="" selected>Please select option...</option>
                            <option value="shared">Shared</option>
                            <option value="own">My own room</option>
                            <option value="either">Share or own room</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <div>
                        <label className="control-label">AboutMe</label>
                        <textarea
                            value={this.state.aboutme}
                            onChange={this.onChange}
                            name="aboutme"
                            rows="3"
                            className="form-control"
                        />
                    </div>
                    <br />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Submit
                        </button>
                </div>
            </form>
        );
    }
}

export default ProfileForm