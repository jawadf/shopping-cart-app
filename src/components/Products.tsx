import React from 'react';
import util from '../utilities/util';

interface IProps {
    products: number[];
    handleAddToCart: () => void;
  }
  
const Products:  React.FC<IProps>  = (props) => {

    const productItems = props.products.map(product => (
        <div key={product.id} className="col-md-4">
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={(e) => props.handleAddToCart(e, product)} >
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>
                        {product.title}
                    </p>
                </a>
                <div>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button 
                        className="btn btn-primary"
                        onClick={(e) => props.handleAddToCart(e, product)}
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

export default Products;
