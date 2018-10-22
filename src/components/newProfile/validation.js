import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
    let errors = {};

    if (!data.firstName) {
        errors.firstName = 'This field is required';
    }
    if (!data.lastName) {
        errors.lastName = 'This field is required';
    }
    if (!data.email) {
        errors.email = 'This field is required';
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email)){
        errors.email = 'Must have valid email address';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}