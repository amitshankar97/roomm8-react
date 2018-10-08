import React, { Component } from 'react';
import { connect } from 'react-redux';

import Featurettes from './featurettes';
import Carousel from './carousel';
import './home.css'

class Home extends Component {

    render() {
        return (

            <div>
                <Carousel />
                <Featurettes />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Home);
