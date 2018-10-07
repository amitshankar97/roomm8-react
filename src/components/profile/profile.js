import React, { Component } from 'react';
import { connect } from 'react-redux';
import './roommate-profile.css';
import { Link } from 'react-router-dom'
import InstagramLogo from '../../assets/logos/instagram.png';
import FacebookLogo from '../../assets/logos/facebook.png';
import EmailLogo from '../../assets/logos/email.png';
import SamplePicture from './sample_profile_picture.jpg';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_API_KEY = "AIzaSyBPsMu2UJW4WKemA-_glrl6Bh5NyS3SIj0";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 47.6393818, lng: -122.1359411 }}
    >
        <Marker position={{ lat: 47.6393818, lng: -122.1359411 }} />
    </GoogleMap>
))

class Profile extends Component {
    render() {
        return (
            <div className="container emp-profile">
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={SamplePicture} className="rounded-circle" alt="Profile" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5 className="display-4">
                                    Amit Shankar
                                </h5>
                                <h6 className="lead">
                                    The University of Arizona
                                </h6>
                                <ul className="nav nav-tabs user-info-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Housing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <div className="profile-work">
                                    <p className="lead">LINKS</p>
                                    <div className="d-flex justify-content-between">
                                        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/amit__shankar/"><img src={InstagramLogo} className="logos img-responsive" alt="Instagram" /></a>
                                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/amitshankar97/"><img style={{ marginLeft: "10px" }} src={FacebookLogo} className="logos rounded-circle img-responsive" alt="Instagram" /></a>
                                        <a href="mailto:amitarunshankar@gmail.com"><img style={{ marginLeft: "10px" }} src={EmailLogo} className="logos img-responsive" alt="Email" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p className="lead">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis magna at hendrerit dignissim. Quisque mauris ex, laoreet at pretium vel, porta suscipit urna. Ut a pharetra tortor. Duis sollicitudin quam eget justo iaculis, eget laoreet felis pellentesque. Maecenas bibendum faucibus dolor nec consectetur. Integer eget justo sed quam venenatis fermentum. Sed ultrices erat vel enim mattis bibendum. Sed sagittis lorem libero.
                                        </p>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Type of Property</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>House</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Number of Roomm8s</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>3</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Bathrooms</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Location</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>1 Microsoft Way, Redmond, WA</p>
                                        </div>
                                    </div>
                                    <MyMapComponent
                                        isMarkerShown
                                        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + GOOGLE_API_KEY}
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `300px`, marginBottom: `15px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Move In</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Available now</p>
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

export default connect(mapStateToProps)(Profile);
