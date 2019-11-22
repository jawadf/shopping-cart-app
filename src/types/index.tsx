export interface IProduct {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: string[];
  price: number;
  isFreeShipping: boolean
  count? : number;
}

export interface IProductProps {
  products: Array<IProduct>;
  fetchProducts: () => void;
  addToCart: any;
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


