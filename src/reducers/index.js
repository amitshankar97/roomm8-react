import { combineReducers } from 'redux'
import search from './search';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    search,
    form: formReducer
});