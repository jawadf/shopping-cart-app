import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const initialState: any = {};

//  if(localStorage.getItem('cartItems') ) {
//      initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems') as string)};
//  }

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)) );

ReactDOM.render(
    (
    <Provider store={store}>
        <App />
    </Provider>
    ),
    document.getElementById('root')
);