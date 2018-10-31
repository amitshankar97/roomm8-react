import React, { Component } from 'react';
import { connect } from 'react-redux';
import './propertyProfile.css';
import SampleApartment from './sampleApartment.jpg';
import SamplePicture from '../profile/sample_profile_picture.jpg';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_API_KEY = "AIzaSyBPsMu2UJW4WKemA-_glrl6Bh5NyS3SIj0";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 32.235484, lng: -110.840689 }}
    >
        <Marker position={{ lat: 32.235484, lng: -110.840689 }} />
    </GoogleMap>
))

class PropertyProfile extends Component {
    render() {
        return (
            <div className="container emp-profile">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-img">
                                <img src={SampleApartment} className="img-fluid propertyImg" alt="Property" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10">
                            <div className="profile-head">
                                <h5 className="display-4">
                                    Student Apartment
                                </h5>
                                <h6 className="lead">
                                    Tucson, AZ
                                </h6>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Rating</label>
                                </div>
                                <div className="col-md-6">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Type of Property</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Apartment</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Number of Places Available</label>
                                </div>
                                <div className="col-md-6">
                                    <p>17</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Location</label>
                                </div>
                                <div className="col-md-6">
                                    <p>1 East Speedway Blvd, Tucson, AZ</p>
                                </div>
                            </div>
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + GOOGLE_API_KEY}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `300px`, width: `80%`, marginBottom: `15px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Parking</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Yes - Covered</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Users that live here</label>
                                </div>
                                <div className="col-md-6">
                                    <p>8</p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-3">
                                    <img src={SamplePicture} className="img-fluid userImg" alt="User Photo" />
                                    <a href="#"> See Profile </a>
                                </div>
                                <div className="col-md-3">
                                    <img src={SamplePicture} className="img-fluid userImg" alt="User Photo" />
                                    <a href="#"> See Profile </a>
                                </div>
                                <div className="col-md-3">
                                    <img src={SamplePicture} className="img-fluid userImg" alt="User Photo" />
                                    <a href="#"> See Profile </a>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12">
                                    <form>
                                      <div class="form-group">
                                        <label for="comment">Name:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
                                        </div>
                                        <div class="form-check form-check-inline">

                                            <label for="comment">Rating:</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> 1
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> 2
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline disabled">
                                            <label class="form-check-label">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> 3
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline disabled">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" /> 4
                                            </label>

                                        </div>
                                        <div class="form-check form-check-inline disabled">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" /> 5
                                            </label>
                                        </div>
                                        <div class="form-group">
                                        <label for="comment">Comment:</label>
                                        <textarea class="form-control" rows="3" id="comment"></textarea>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}


export default connect(mapStateToProps)(PropertyProfile);