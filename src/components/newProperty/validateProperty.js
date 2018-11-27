import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (!data.street) {
        errors.street = 'This field is required';
    }
    if (!data.city) {
        errors.city = 'This field is required';
    }
    if (!data.state) {
        errors.state = 'This field is required';
    }
    if (!data.zipcode) {
        errors.zipcode = 'This field is required';
    }
    if (!data.rent) {
        errors.rent = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}