import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

interface IProduct {
    id: number,
    sku: number,
    title: string,
    description: string,
    availableSizes: string[],
    price: number,
    isFreeShipping: boolean
}

interface IProps {
    products: Array<IProduct>;
    handleAddToCart: () => void;
} 

const Products:  React.FC<any>  = (props) => {

    useEffect(() => {
        props.fetchProducts();
    
    }, []);

    const productItems = props.products.map((product: any) => (
        <div key={product.id} className="col-md-4">
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

    ));

    return (
        <div className="row" >
            {productItems}
        </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filteredItems,
        cartItems: state.cart.items
    }
};

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
