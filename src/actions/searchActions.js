import fetch from 'cross-fetch'

const BASE_URL = 'https://roomm8-amit.azurewebsites.net'
const API_URL = 'https://roomm8-amit.azurewebsites.net/api'

/**
 * Users Actions
 */
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
                setTimeout(dispatch, 3000, requestUsersSuccess(json))
                console.log(json);
                // dispatch(requestUsersSuccess(json))
            }
            )
            .catch(err => dispatch(requestUsersError(err)))
    }
}





/**
 * Properties Actions
 */
export const REQUEST_PROPERTIES = 'REQUEST_PROPERTIES';
export const REQUEST_PROPERTIES_SUCCESS = 'REQUEST_PROPERTIES_SUCCESS';
export const REQUEST_PROPERTIES_ERROR = 'REQUEST_PROPERTIES_ERROR';

export function requestProperties() {
    return {
        type: REQUEST_PROPERTIES
    }
}
export function requestPropertiesSuccess(res) {
    return {
        type: REQUEST_PROPERTIES_SUCCESS,
        json: res
    }
}
export function requestPropertiesError(err) {
    return {
        type: REQUEST_PROPERTIES_ERROR,
        err
    }
}


export function fetchProperties(lat, lon) {

    return function (dispatch) {
        dispatch(requestProperties())

        fetch(`${API_URL}/properties?lat=${lat}&lon=${lon}`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            setTimeout(dispatch, 3000, requestPropertiesSuccess(data))
            // requestPropertiesSuccess(data)
        })
        .catch(err => dispatch(requestPropertiesError(err)))
    }
}

/**
 * Marker Logic
 */

export const SELECT_MARKER = 'SELECT_MARKER';

// select markers based on the index
export function selectMarker(key) {
    return {
        type: SELECT_MARKER,
        key
    }
}