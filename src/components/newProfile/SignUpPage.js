import React, { Component } from 'react'
import ProfileForm from './ProfileForm'
import PropertyForm from './PropertyForm'
import './SignUpPage.css'

class SignUpPage extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <PropertyForm />
                    <ProfileForm />
                </div>
            </div>
        );
    }
}

export default SignUpPage;