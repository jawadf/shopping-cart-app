import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOneProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { IProduct, IProductProps} from '../types';
import Modal from './Modal';
import history from '../history';
import { AppState } from '../reducers/index';

const ShowProduct:  React.FC<any>  = (props) => {

    useEffect(() => {
        props.fetchOneProduct(props.match.params.id);
    }, []);

    
    const renderButtons = () => {
        return (
          <React.Fragment>
            <Link to='/' className="ui button" style={{fontSize: 'inherit'}}>Cancel</Link>
            <Link to='/' onClick={() => props.addToCart(props.cartItems, props.selectedProduct)}  className="ui button teal" style={{fontSize: 'inherit'}}>Add to cart</Link>
          </React.Fragment>
        );
      }
    
    const renderContent = () => {
        if(!props.selectedProduct) {
          return <div>The selected product is being rendered...</div>;
        }

        return (
          <>
          <div className="ui medium image">
            <img src={`/products/${props.selectedProduct.sku}.jpeg`} />
          </div>
          <div className="description">
            <div className="ui header">{props.selectedProduct.title}</div>
            <p>We've grabbed the following image and your registered e-mail address.</p>
            <p>${props.selectedProduct.price}</p>
          </div>
          </>
        );
      }

        return (
        <Modal 
            title="Delete Post"
            header="Product Details"
            content={renderContent()}
            actions={renderButtons()}
            onDismiss={() => history.push('/')}
        />
        );
      
}

const mapStateToProps = (state: AppState) => {
    return {
        selectedProduct: state.products.selectedItem,
        cartItems: state.cart.items
    };
};

export default connect(mapStateToProps, { fetchOneProduct, addToCart })(ShowProduct);
