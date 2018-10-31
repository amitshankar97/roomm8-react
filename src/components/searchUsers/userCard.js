import React, { Component } from 'react';
import './userCard.css'

class UserCard extends Component {

    socialHabits = (habits) => {
        return habits.map((habit, i) => {
            return <li className="text-muted" key={i}>{habit}</li>
        })
    }

    render() {
        return (

            <div className="well well-sm">
                <div className="row user-card">
                    <div className="col-sm-6 col-md-4">
                        <img className="img-rounded img-responsive" src={this.props.user.picture.large} alt="student" />
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <h4>{this.props.user.name.first} {this.props.user.name.last}</h4>
                        <small><cite>
                            {this.props.user.location.city}, {this.props.user.location.state}
                            
                        </cite></small>
                        <hr />
                        <ul className="align">
                            Smoking: {this.props.user.smoking}
                            <br />
                            <hr />
                            Social Habits:
                            {
                                this.props.user.social_habits.length > 0
                                    ? <ul> {this.socialHabits(this.props.user.social_habits)}</ul>
                                    : null
                            }
                            <hr />
                            Cleanliness: {this.props.user.cleanliness}
                        </ul>
                        <a href="/Profile" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>

            // OLD USER CARD
            /*<div className="card mb-3">
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
            </div>*/
        );
    }
}

export default UserCard;