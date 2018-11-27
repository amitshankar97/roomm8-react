import browserHistory from '../helpers/browserHistory';

const BASE_URL = 'https://roomm8-amit.azurewebsites.net'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export function userLogInSuccess(res) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: res
    }
}

export function userLogIn(data) {
    return function (dispatch) {
        //mock success
        
        dispatch(userLogInSuccess({ Id: Math.random(), firstName: 'bob', lastName: 'barker', email: data.email }));
        browserHistory.push('/');
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