import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { Link } from "react-router-dom";
import { fetchProducts, fetchOneProduct } from '../actions/productActions';
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
    
    const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
     };

    const handlePreviousClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if((currentPage <= 0) === false) {
            setCurrentPage(currentPage - 1);
        } 
        
     };
    const handleNextClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
         let pagesCount = Math.ceil(props.products.length / pageSize);
        if((currentPage >= pagesCount-1) === false) {
            setCurrentPage(currentPage + 1);
        }
     };

     const productItems = props.products
        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .map(product => {
          return (
            
            <Link to={`/products/${product.id}`} key={product.id} className="ui card wide three column product-card">
                <div className="image product-image-container">
                    <img src={`/products/${product.sku}.jpeg`} className="product-image" alt={product.title} />
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
          </Link>
          );
     }); 

    return (
        <div className="ui grid container margin-tb-medium">
            <div className="ui grid three centered stackable link cards">
                {productItems}
            </div> 
            <Pagination
                pagesCount={Math.ceil(props.products.length / pageSize)}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                handlePreviousClick={handlePreviousClick}
                handleNextClick={handleNextClick}
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

export default connect(mapStateToProps, { fetchProducts, addToCart, fetchOneProduct })(Products);
