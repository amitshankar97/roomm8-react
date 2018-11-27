import browserHistory from '../helpers/browserHistory';

const BASE_URL = 'https://roomm8-amit.azurewebsites.net'

export const USER_SAVE_PROFILE_SUCCESS = 'USER_SAVE_PROFILE_SUCCESS';

export function userSaveProfileSuccess(res) {
    return {
        type: USER_SAVE_PROFILE_SUCCESS,
        payload: res
    }
}

export function userSaveProfile(data) {
    return function (dispatch) {
        //mock success
        dispatch(userSaveProfileSuccess({ Id: Math.random(), firstName: 'bob', lastName: 'barker', email: data.email }));
        console.log(data);
        if(data.hasProperty === "true"){
            browserHistory.push('/SaveProperty');
        }
        else{
            browserHistory.push('/Profile');
        }
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