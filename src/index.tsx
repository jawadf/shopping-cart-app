import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

if(localStorage.getItem('cartItems')) {
    initialState.cart = {item: JSON.parse(localStorage.getItem('cartItems'))};
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    (
    <Provider store={store}>
        <App />
    </Provider>
    ),
    document.getElementById('root')
);