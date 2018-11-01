import React, { Component } from 'react';
import { connect } from 'react-redux';
import './propertyProfile.css';
import SamplePicture from '../profile/sample_profile_picture.jpg';
import Comments from './comments';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_API_KEY = "AIzaSyBPsMu2UJW4WKemA-_glrl6Bh5NyS3SIj0";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.markerLocation}
    >
        <Marker position={props.markerLocation} />
    </GoogleMap>
))

class PropertyProfile extends Component {

    render() {
        let propID = this.props.match.params.propertyID;
        var property = {};

        for (let i = 0; i < this.props.state.search.properties.length; i++) {
            const element = this.props.state.search.properties[i];
            if (element.id === propID) {
                property = Object.assign({}, element);
                property = element;
            }
        }

        if (property === {} || property === null || property === undefined) {
            return null;
        }

        console.log(property.geometry.location);

        return (
            <div className="container emp-profile">
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-img">
                                {
                                    property.photos && property.photos.length > 0
                                        ? <img src={'https://roomm8-amit.azurewebsites.net/api/getPhoto/' + property.photos[0].photo_reference} className="img-fluid propertyImg" alt="Property" />
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10">
                            <div className="profile-head">
                                <h5 className="display-4">
                                    {property.name}
                                </h5>
                                <h6 className="lead">
                                    {property.formatted_address}
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
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
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
                            <div className="row">
                                <div className="col-md-9">
                                    <MyMapComponent
                                        isMarkerShown
                                        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + GOOGLE_API_KEY}
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `300px`, marginBottom: `15px` }} />}
                                        markerLocation={property.geometry.location}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                            </div>
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
                                    <img src={SamplePicture} className="img-fluid userImg" alt="user" />
                                    <a href="/Profile"> See Profile </a>
                                </div>
                                <div className="col-md-3">
                                    <img src={SamplePicture} className="img-fluid userImg" alt="user" />
                                    <a href="/Profile"> See Profile </a>
                                </div>
                                <div className="col-md-3">
                                    <img src={SamplePicture} className="img-fluid userImg" alt="user" />
                                    <a href="/Profile"> See Profile </a>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-9">
                                    <h4>Comments: </h4>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-9">

                                    <div className="form-group">
                                        <label htmlFor="comment">Name:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
                                    </div>
                                    <div className="form-check form-check-inline">

                                        <label htmlFor="comment">Rating:</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> 1
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> 2
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline disabled">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> 3
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline disabled">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" /> 4
                                        </label>

                                    </div>
                                    <div className="form-check form-check-inline disabled">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" /> 5
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment">Comment:</label>
                                        <textarea className="form-control" rows="3" id="comment"></textarea>
                                    </div>


                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <Comments />
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