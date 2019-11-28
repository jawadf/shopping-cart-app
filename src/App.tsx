import React, { useState, useEffect } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

const App: React.FC = () => {

  // useEffect(() => {
  //   /**
  //    * setProducts(data);
  //       setFilteredProducts(data);
  //    */
  //   // if(localStorage.getItem('cartItems')) {
  //   //   setCartItems(JSON.parse(localStorage.getItem<any>('cartItems')));
  //   //  // setCartItems((arr:any ) =>[ ...arr, JSON.parse(localStorage.getItem('cartItems'))]);
  //   // }
  // }, []);


  return (
    <>
    <div className="ui container margin-tb-small">
      <div className="ui secondary menu">
        <a href="#" className="active item">
          Home
        </a>
        <a href="#" className="item">
          Categories
        </a>
        <div className="right menu">
          <a href="#" className="ui item">
            <i className="shopping cart icon">&nbsp;</i> Cart
          </a>
          <a href="#" className="ui item">
            <i className="heart icon">&nbsp;</i> Wishlist
          </a>
        </div>
      </div>
    </div>
    <img style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'center 54%' }} className="ui image" src="/hero-image.jpg" />
    <div className="">
      <h1>Choose your bike</h1>
      <hr className="margin-tb-medium display-block"/>
      <Filter />
      <hr className="margin-tb-medium display-block"/> 
      <div className="ui grid">
        <div className="thirteen wide column">
        <Products />
      <span className="margin-tb-medium display-block"/>

        </div>
        <div className="three wide column">
        <Basket />
        </div>
      </div>
      
      <footer className="margin-tb-medium">
        Footer
      </footer>
    </div>
    </>
  );
}

export default App;
