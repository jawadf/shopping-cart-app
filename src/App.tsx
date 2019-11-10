import React, { useState, useEffect }  from 'react';
import Products from './components/Products';
import Filter from './components/Filter';

// on min: 30:52

interface IProps {
  product: string;
}

interface IProducts {
  products: string[];
}

const App: React.FC<IProps>  = (props) => {

  // State
  const [products, setProducts ] = useState<Array<number> | null>([]);
  const [filteredProducts, setFilteredProducts ] = useState<Array<number> | null>();
  const [size, setSize ] = useState<number | null>();
  const [sort, setSort ] = useState<number | null>();


  //ComponentWillMount
  useEffect(() => {
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => {
      setProducts(data);
      setFilteredProducts(data);
    })
  })

  const handleChangeSize = (e) => {
    setSize(e.target.value);
    listProducts();

  };

  // TO FIX
  const listProducts = () => {
    products.sort((a, b) => {
        (sort === 'lowestprice'
          ? ((a.price > b.price) ? 1 : -1)
          : ((a.price < b.price) ? 1 : -1)));
    } else {
      products.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
    if (size !== '') {
      return { filteredProducts: products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0) };
    }
    return { filteredProducts: products };
    })
}};


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
        <div className="col-md-8">
          A
        </div>
      </div>
    </div>
  );
}

export default App;
