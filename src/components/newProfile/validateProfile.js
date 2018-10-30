import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (!data.firstName) {
        errors.firstName = 'This field is required';
    }
    if (!data.lastName) {
        errors.lastName = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}