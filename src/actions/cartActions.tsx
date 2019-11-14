import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

// ADD TO CART
export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();

    let productAlreadyInCart = false;
    cartItems.forEach((item: any)=> {
      if(item.id === product.id) {
        productAlreadyInCart = true;
        item.count++;
      } 
    });

    if(!productAlreadyInCart) {
        cartItems.push((arr:any ) =>[ ...arr, {product, count:1} ]);
     }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    return dispatch({ type: ADD_TO_CART, payload: { cartItems: cartItems }})

}

// REMOVE FROM CART
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().arr.filter((el:any) => el.id !=product.id);
  localStorage.setItem('cartItems', cartItems);
  
  return dispatch({ type: REMOVE_FROM_CART, payload: { cartItems: cartItems }})
};