import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import { IProduct } from '../types';
import { AppState } from '../reducers/index';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
 
// ADD TO CART
export const addToCart = (items: any, product: IProduct): ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
    const cartItems = items.slice();

    let productAlreadyInCart = false;
    cartItems.forEach((item: any) => {
      if(item.id === product.id) {
        productAlreadyInCart = true;
        item.count++;
      } 
    });

    if(!productAlreadyInCart) {
        cartItems.push((arr : any) => [ ...arr, { product, count:1} ]);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    return dispatch({ type: ADD_TO_CART, payload: { cartItems: cartItems }});

}

// REMOVE FROM CART
export const removeFromCart = (items: any, product: IProduct): ThunkAction<void, AppState, null, Action<string>> => (dispatch) => {
  const cartItems = items.slice().arr.filter((el:any) => el.id !=product.id);
  localStorage.setItem('cartItems', cartItems);
  
  return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems: cartItems }})
};