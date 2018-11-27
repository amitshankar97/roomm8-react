import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    
    if (!data.email) {
        errors.email = 'This field is required';
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email)){
        errors.email = 'Must have valid email address';
    }

    if (!data.username) {
        errors.username = 'This field is required';
    }
    if (!data.password) {
        errors.password = 'This field is required';
    }
    if (!data.passwordConfirmation) {
        errors.passwordConfirmation = 'This field is required';
    }
    if ((data.password) !== (data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}