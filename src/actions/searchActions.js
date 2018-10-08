import fetch from 'cross-fetch'

const BASE_URL = 'https://roomm8-amit.azurewebsites.net'

export const REQUEST_USERS = 'REQUEST_USERS';

export function requestUsers() {
    return {
        type: REQUEST_USERS
    }
}


export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';

export function requestUsersSuccess(res) {
    return {
        type: REQUEST_USERS_SUCCESS,
        json: res
    }
}


export const REQUEST_USERS_ERROR = 'REQUEST_USERS_ERROR';

export function requestUsersError(err) {
    return {
        type: REQUEST_USERS_ERROR,
        err
    }
}

export function fetchUsers() {

    return function (dispatch) {
        dispatch(requestUsers())
        
        return fetch(`${BASE_URL}/users`)
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
                dispatch(requestUsersSuccess(json))
            }
            )
            .catch(err => dispatch(requestUsersError(err)))
    }
}