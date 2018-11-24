import {
    REQUEST_USERS
    , REQUEST_USERS_SUCCESS
    , REQUEST_USERS_ERROR
    , REQUEST_PROPERTIES
    , REQUEST_PROPERTIES_SUCCESS
    , REQUEST_PROPERTIES_ERROR
} from '../actions/searchActions';

const initialState = {
    isFetching: false,
    users: [],
    properties: [],
    previous: '',
    next: '',
    err: ''
}

export default function search(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USERS: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case REQUEST_USERS_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                users: action.json.users,
                previous: action.json.previous,
                next: action.json.next
            })
        }
        case REQUEST_USERS_ERROR: {
            return Object.assign({}, state, {
                isFetching: false,
                error: action.err
            })
        }


        case REQUEST_PROPERTIES: {
            return Object.assign({}, state, {
                isFetching: true
            })
        }
        case REQUEST_PROPERTIES_SUCCESS: {
            console.log(action);
            return Object.assign({}, state, {
                isFetching: false,
                properties: action.json,
                previous: action.json.previous,
                next: action.json.next
            })
        }
        case REQUEST_PROPERTIES_ERROR: {
            return Object.assign({}, state, {
                isFetching: false,
                error: action.err
            })
        }


        default: {
            return state;
        }
    }
}