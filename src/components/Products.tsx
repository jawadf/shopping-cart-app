import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { IProduct, IProductProps} from '../types';
import { AppState } from '../reducers/index';
import Pagination from './Pagination';

const Products:  React.FC<IProductProps>  = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(9);

    useEffect(() => {
        props.fetchProducts();
    }, []);

    const handlePageClick = (e: any, index: any) => {
        e.preventDefault();
        setCurrentPage(index);
     };

     const productItems = props.products
        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map(product => {
          return (
            <div key={product.id} className="ui card wide three column">
            <div className="image">
             <img src={`/products/${product.sku}.jpeg`} alt={product.title} />
            </div>
            <div className="content">
              <a className="header">{product.title}</a>
              <div className="meta">
                <span className="date">Joined in 2013</span>
              </div>
              <div className="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <button 
                        className="ui teal button"
                        onClick={() => props.addToCart(props.cartItems, product)} 
                    >
                        Add To Cart
                    </button>  
                </span>
                <span>
                    <b>{util.formatCurrency(product.price)}</b>
                </span>       
            </div>
          </div>
          );
     }); 

    /**
     * 
     *         <div key={product.id} className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={() => props.addToCart(props.cartItems, product)} >
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>
                        {product.title}
                    </p>
                </a>
                <div>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button 
                        className="btn btn-primary"
                        onClick={() => props.addToCart(props.cartItems, product)} 
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
     * 
     */
 
    return (
        <div className="ui grid container margin-tb-medium">
           <div className="ui grid three centered stackable link cards">
           
           {productItems}
           
            </div> 
            <Pagination
                pagesCount={Math.ceil(props.products.length / pageSize)}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                handlePreviousClick={handlePageClick}
                handleNextClick={handlePageClick}
            />
        </div>
    );
    
}

const mapStateToProps = (state: AppState) => {
    return {
        products: state.products.filteredItems,
        cartItems: state.cart.items
    };
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
