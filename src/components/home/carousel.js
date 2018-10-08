import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'
import { Link } from 'react-router-dom';


class Carousel extends Component {

    render() {
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="10000" >
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="img-fluid" src="http://www.clker.com/cliparts/7/9/5/e/14523763661619054672night-in-the-city-21851292200793awk.jpg" alt="First slide" />
                            <div className="container">
                                <div className="carousel-caption text-left">
                                    <h1>Have a room you need filled? </h1>
                                    <p>Let others know you have a room available</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/SignUp" role="button">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="http://www.csm.edu/sites/default/files/styles/interior_slider_image/public/large-ad-image/Walk%20Tall%20Honors%20Program%20Slider.jpg?itok=-9oVBT2q" alt="Second slide" />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Communication is Key</h1>
                                    <p>Send messages or chat with potentional roomm8s</p>
                                    <p>
                                    <Link className="btn btn-lg btn-primary" to="/SignUp" role="button">Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="third-slide" src="https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/2366-19/promenade-at-town-center-apartments-exterior.jpg" alt="Third slide" />
                            <div className="container">
                                <div className="carousel-caption text-right">
                                    <h1>Finding the Perfect roomm8</h1>
                                    <p>Seach your local area for that perfect roomm8</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/SignUp" role="button">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" data-target="#myCarousel" role="button" data-slide="prev" >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" data-target="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}


export default Carousel;