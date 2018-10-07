import { connect } from 'react-redux';
import React, { Component } from 'react';

class SearchUsers extends Component {
    render() {
        return (<div>Search Users</div>);
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}


export default connect(mapStateToProps)(SearchUsers);