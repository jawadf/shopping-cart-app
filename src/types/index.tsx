
/************  Action Types  *************/

export enum EActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FILTER_PRODUCTS_BY_SIZE = 'FILTER_PRODUCTS_BY_SIZE',
  ORDER_PRODUCTS_BY_PRICE = 'ORDER_PRODUCTS_BY_PRICE',

  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}


/**********  Component Interfaces ********/

export interface IProduct {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: string[];
  price: number;
  isFreeShipping: boolean
  count? : number | any ;
}

/************  Props Types  **************/

export interface IProductProps {
  products: Array<IProduct>;
  fetchProducts: () => void;
  addToCart: (cartItems: Array<IProduct>, product: IProduct) => void;
  cartItems: Array<IProduct>;
}

export interface IBasketProps {
  cartItems: Array<IProduct>;
  removeFromCart: any;
}

export interface IFilterProps {
  products: Array<IProduct>
  filteredProducts: Array<IProduct>
  size: string, 
  sort: string,
  filterProducts: any,
  sortProducts: any
}

/************  State Types  *************/

export interface IProductState {
  items: Array<IProduct>;
  filteredItems: Array<IProduct>;
  sort: string;
  size: string;
  selectedItem: any;
}

export interface ICartState {
  items: Array<IProduct>;
}



