import React, { Component } from 'react';

class UserCard extends Component {

    socialHabits = (habits) => {
        return habits.map((habit, i) => {
            return <li className="text-muted" key={i}>{habit}</li>
        })
    }

    render() {
        return (
            <div className="row justify-content-md-center" style={{padding: "15px"}}>
                <div className="col-sm-10 col-md-6">
                    <div className="card mb-3">
                        <img className="card-img-top" src={this.props.user.picture.large} alt="student" />
                        <div className="card-body">
                            <h5 className="card-title display-4">{this.props.user.name.first} {this.props.user.name.last}</h5>
                            <p className="card-text text-muted">
                                {this.props.user.location.city}, {this.props.user.location.state}<br />
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item lead">Smoking: {this.props.user.smoking}</li>
                                {
                                    this.props.user.social_habits.length > 0
                                    ? <li className="list-group-item lead">Social Habits: <ul>{this.socialHabits(this.props.user.social_habits)}</ul></li>
                                    : null
                                }
                                <li className="list-group-item lead">Cleanliness: {this.props.user.cleanliness}</li>
                            </ul>
                            <br />
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;