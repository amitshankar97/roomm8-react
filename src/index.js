import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import history from './helpers/browserHistory';


const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history))
);
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
