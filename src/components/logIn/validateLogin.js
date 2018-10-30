import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    
    if (!data.email) {
        errors.email = 'This field is required';
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email)){
        errors.email = 'Must have valid email address';
    }
    if (!data.password) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}