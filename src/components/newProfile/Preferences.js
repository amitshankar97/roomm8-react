import React, { Component } from 'react'

class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smoking: "",
            lastName: "",
            email: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={this.onSubmit}>
                    <h1>Roommate Preferences</h1>
                    <label>Mind if your roommates smoke?
                    <div className="radio">
                        <label>
                            <input 
                                type="radio" 
                                value="Yes"
                                onChange={this.onChange}
                                className="form-control"
                                name="smoking"
                            />
                            Yes
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="No"
                                onChange={this.onChange}
                                className="form-control"
                                name="smoking"
                            />
                            No
                        </label>
                    </div>
                    </label>
                    <div>
                        <label>Do you mind pets?
                            <div className="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        value="Yes"
                                        onChange={this.onChange}
                                        className="form-control"
                                        name="pets"
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        value="No"
                                        onChange={this.onChange}
                                        className="form-control"
                                        name="pets"
                                    />
                                    No
                                </label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>Do you need your own parking space?
                            <div className="radio">
                                <label>
                                    <input 
                                        type="radio" 
                                        value="Yes"
                                        onChange={this.onChange}
                                        className="form-control"
                                        name="parking"
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        value="No"
                                        onChange={this.onChange}
                                        className="form-control"
                                        name="parking"
                                    />
                                    No
                                </label>
                            </div>
                        </label>
                    </div>                    
                    <label> How many people would you want to live with?
                        <select class="custom-select">
                            <option selected>Please select amount...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4+">Four+</option>
                        </select>
                    </label>
                    <label> How cleanly would you like your roommate to be? 
                        <select class="custom-select">
                            <option selected>Please select option...</option>
                            <option value="No Preference">No Preference</option>
                            <option value="Somewhat">Somewhat</option>
                            <option value="Very">Very</option>
                        </select>
                    </label>
                    <label> Roommate sleeping habits
                        <select class="custom-select">
                            <option selected>Please select sleeping habit...</option>
                            <option value="No Preference">No Preference</option>
                            <option value="Nighttime Sleeper">Nighttime Sleeper</option>
                            <option value="Daytime Sleeper">Daytime Sleeper</option>
                        </select>
                    </label>
                    <label> Roommate sleeping habits
                        <select class="custom-select">
                            <option selected>Please select sleeping habit...</option>
                            <option value="No Preference">No Preference</option>
                            <option value="Nighttime Sleeper">Nighttime Sleeper</option>
                            <option value="Daytime Sleeper">Daytime Sleeper</option>
                        </select>
                    </label>
                    <label> Roommate sleeping habits
                        <select class="custom-select">
                            <option selected>Please select sleeping habit...</option>
                            <option value="No Preference">No Preference</option>
                            <option value="Nighttime Sleeper">Nighttime Sleeper</option>
                            <option value="Daytime Sleeper">Daytime Sleeper</option>
                        </select>
                    </label>
                    <div className="form-group">
                        <button className="btn btn-primary btn-lg">
                            Next
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Preferences