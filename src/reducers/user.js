import {
    USER_SIGNUP_SUCCESS
} from '../actions/userActions';

const initialState = {
    info: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNUP_SUCCESS: {
            return Object.assign({}, state, {
                info: action.payload
            })
        }
        default: {
            return state;
        }
    }
}