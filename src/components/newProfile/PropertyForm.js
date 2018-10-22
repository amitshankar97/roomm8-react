import React, { Component } from 'react'
import validateInput from './validation'

class PropertyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            bathrooms: "",
            rooms: "",
            parkingtype: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            availability: "",
            inhousehold: "",
            roomtype: "",
            rent: "",
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
                <h1>Property Profile</h1>
                <div className="form-group">
                    <label className="control-label">Street Address</label>
                    <input
                        value={this.state.street}
                        onChange={this.onChange}
                        type="text"
                        name="street"
                        className="form-control"
                    />
                    {errors.street && <div className="help-block">{errors.street}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">City</label>
                    <input
                        value={this.state.city}
                        onChange={this.onChange}
                        type="text"
                        name="city"
                        className="form-control"
                    />
                    {errors.city && <div className="help-block">{errors.city}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">State</label>
                    <input
                        value={this.state.state}
                        onChange={this.onChange}
                        type="text"
                        name="state"
                        className="form-control"
                    />
                    {errors.state && <div className="help-block">{errors.state}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">Zip Code</label>
                    <input
                        value={this.state.zip}
                        onChange={this.onChange}
                        type="text"
                        name="zipcode"
                        className="form-control"
                    />
                    {errors.zip && <div className="help-block">{errors.zip}</div>}
                </div>
                <div className="form-group">
                    <label className="control-label">Cost of Rent</label>
                    <input
                        value={this.state.rent}
                        onChange={this.onChange}
                        type="number"
                        name="rent"
                        className="form-control"
                    />
                    {errors.rent && <div className="help-block">{errors.rent}</div>}
                </div>
                <div className="form-group">
                    <label> Rentable Room Type
                    <select class="custom-select" value={this.state.value} onChange={this.onChange} name="roomtype">
                            <option value="" selected>Please select option...</option>
                            <option value="shared">Shared</option>
                            <option value="single">Single</option>
                            <option value="group">Group</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> Rooms Available
                    <select class="custom-select" value={this.state.value} onChange={this.onChange} name="rooms">
                            <option value="" selected>Please select option...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> Number of Bathrooms
                        <select class="custom-select" value={this.state.value} onChange={this.onChange} name="bathrooms">
                            <option value="" selected>Please select option...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> Currently Living on Property
                        <select class="custom-select" value={this.state.value} onChange={this.onChange} name="inhousehold">
                            <option value="" selected>Please select option...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <label> Parking Space Type
                        <select class="custom-select" value={this.state.value} onChange={this.onChange} name="parking">
                            <option value="" selected>Please select option...</option>
                            <option value="shared">None</option>
                            <option value="shared">Tandem</option>
                            <option value="own">Garage</option>
                            <option value="either">Parking Lot</option>
                            <option value="either">Covered</option>
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <div>
                        <label className="control-label">Description</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.onChange}
                            name="description"
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

export default PropertyForm