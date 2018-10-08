import React, { Component } from 'react';


class UserCard extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-10 col-md-6">
                    <div className="card mb-3">
                        <img className="card-img-top" src={this.props.user.picture.large} alt="student" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.user.name.first} {this.props.user.name.last}</h5>
                            <div className="card-text">
                                <div className="row">
                                    <div className="col-sm-4">
                                        {this.props.user.contact.email}
                                    </div>
                                    <div className="col-sm-4">
                                        {this.props.user.contact.phone}
                                    </div>
                                    <div className="col-sm-4">
                                        {this.props.user.location.city}, {this.props.user.location.state}
                                    </div>
                                </div>
                            </div>
                            <p className="card-text">
                                {this.props.user.contact.email}<br />
                                {this.props.user.contact.phone}<br />
                                {this.props.user.location.city}, {this.props.user.location.state}<br />
                            </p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;