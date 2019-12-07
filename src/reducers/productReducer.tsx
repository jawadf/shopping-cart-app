import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, SHOW_PRODUCT } from "../actions/types";
import { IProductState } from  '../types';

const initialState: IProductState = { items: [], filteredItems: [], size: '', sort: '', selectedItem: null };
 
export default function(state = initialState, action): IProductState {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return { ...state, items: action.payload, filteredItems: action.payload };
        case SHOW_PRODUCT:
            return { ...state, selectedItem: action.payload };
        case FILTER_PRODUCTS_BY_SIZE:
            return { ...state, filteredItems: action.payload.items, size: action.payload.size };
        case ORDER_PRODUCTS_BY_PRICE:
            return { ...state, filteredItems: action.payload.items, sort: action.payload.sort };
        default:
            return state;
    }
 
}