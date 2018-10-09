import React, { Component } from 'react';
import './featurettes.css'
import GirlOnLatop from './pictures/girlonlaptop.jpg'
import Bed from './pictures/bed.jpg'
import Chatting from './pictures/chatting.jpg'
import { Link } from 'react-router-dom';

class Featurettes extends Component {

    render() {
        return (
            <div className="container marketing">

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Finding the <strong>Perfect roomm8.</strong> <span className="text-muted">Making it easy.</span></h2>
                        <p className="lead">Seach your local area for that perfect person that will fit you and the way you live.</p>
                        <Link className="btn btn-lg btn-primary" to="/SignUp" role="button">Sign Up</Link>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '100%' }} src={GirlOnLatop} data-holder-rendered="true" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Have a room you need filled? <span className="text-muted">Post a listing.</span></h2>
                        <p className="lead">Whether you need to share a room or have a vacant room, let others know you have a room available.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image  img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '100%' }} src={Bed} data-holder-rendered="true" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Communication is Key. <span className="text-muted">Talk to each other.</span></h2>
                        <p className="lead">Interested in becoming roomm8s? Why not communicate with each other by sending a message or using our chat feature.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image" data-src="holder.js/500x500/auto" alt="500x500" style={{ width: '100%' }} src={Chatting} data-holder-rendered="true" />
                    </div>
                    
                </div>

            </div>
        );
    }
}


export default Featurettes;