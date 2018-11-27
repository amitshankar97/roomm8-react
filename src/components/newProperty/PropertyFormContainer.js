import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropertyForm from './PropertyForm';
import { userSaveProperty } from '../../actions/userPropertyActions';


class PropertyFormContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div>
                <PropertyForm  savePropertyRequest={this.props.savePropertyRequest} userState={this.props.user} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => (
    {
        savePropertyRequest: (data) => dispatch(userSaveProperty(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFormContainer);