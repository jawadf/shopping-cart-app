import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "./types";
import { IProduct } from '../types';
import { AppState } from '../reducers/index';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const fetchProducts = () : ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => {
        
        return dispatch({
            type: FETCH_PRODUCTS, 
            payload: data
        });        
    });
};

export const filterProducts = (products: Array<IProduct>, size: string)  : ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
    return dispatch({ 
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === '' ? products : products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0)
        }
    });
};

export const sortProducts = (items: Array<IProduct>, sort: string)  : ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
    const products = items.slice();
    if (sort !== '') {
        products.sort((a, b) =>
          (sort === 'lowest'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
    } else {
        products.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
    
    return dispatch({ 
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products
        }
    });
};