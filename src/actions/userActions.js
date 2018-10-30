import fetch from 'cross-fetch'
import browserHistory from '../helpers/browserHistory';

const BASE_URL = 'https://roomm8-amit.azurewebsites.net'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';

export function userSignUpSuccess(res) {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: res
    }
}

export function userSignUp(data) {
    return function (dispatch) {
        //mock success
        
        dispatch(userSignUpSuccess({ Id: Math.random(), firstName: 'bob', lastName: 'barker', email: data.email }));
        browserHistory.push('/SaveProfile');
        /*
        return fetch(`${BASE_URL}/user/signup`,{
            method: 'post',
            body: JSON.stringify(data)
        })//todo: find out signup url
            .then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("404");
                }
            )
            .then(json => {
                console.log(json);
                dispatch(userSignUpSuccess({ firstName: json.firstName, lastName: json.lastName, email: json.email }));
                browserHistory.push('/ProfileForm');
            }
            )
            .catch(err => dispatch(userLoginFailed(err)))
            */
    }
}