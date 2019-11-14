import React, { useState, useEffect }  from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import { element, number } from 'prop-types';

// on min: 53:34
// json-server public/db.json --port 8000


interface IProduct {
  id: number,
  sku: number,
  title: string,
  description: string,
  availableSizes: string[],
  price: number,
  isFreeShipping: boolean
};


const App: React.FC = () => {

  // State
  const [products, setProducts ] = useState<Array<IProduct> >([]);
  const [filteredProducts, setFilteredProducts ] = useState<Array<IProduct>>([]);
  const [size, setSize ] = useState<any >();
  const [sort, setSort ] = useState<any >();
  const [cartItems, setCartItems ] = useState<any>([]);

  useEffect(() => {

    /**
     * setProducts(data);
        setFilteredProducts(data);
     */

    if(localStorage.getItem('cartItems')) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')));
     // setCartItems((arr:any ) =>[ ...arr, JSON.parse(localStorage.getItem('cartItems'))]);
    }


  }, []);


  return (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <hr/>
      <div className="row">
        <div className="col-md-8">
          <Filter 
            size={size} 
            sort={sort} 
            handleChangeSize={handleChangeSize}
            handleChangeSort={handleChangeSort}
            count={filteredProducts.length}
          />
          <hr />
          <Products products={filteredProducts} handleAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">
          <Basket cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
