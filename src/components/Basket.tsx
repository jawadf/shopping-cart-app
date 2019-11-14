import React from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { removeFromCart } from '../actions/cartActions';

 
interface IProduct {
    id: number,
    sku: number,
    title: string,
    description: string,
    availableSizes: string[],
    price: number,
    isFreeShipping: boolean,
    count?: number
}

interface IProps {
    products: Array<IProduct>;
    cartItems: Array<IProduct>;
  }
  
const Basket:  React.FC<any>  = (props) => {

    const { cartItems } = props;

    return (
        <div className="alert alert-info" >
            {cartItems.length === 0 ? " Basket is empty. " : <p> You have {cartItems.length} products in the basket.</p>}
            {cartItems.length > 0 && (
                <div>
                    <ul>
                        {cartItems.map((item: any) => 
                            (
                            <li key={item.id}>
                                <b>{item.title}</b>
                                x{item.count} = {item.price * item.count}
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => props.removeFromCart(props.cartItems, item)}
                                >
                                    X
                                </button>
                            </li>
                            )
                        )}
                    </ul>
                    Total: {util.formatCurrency(cartItems.reduce((a: number, c: number) => a + c.price*c.count, 0))}
                    <br />
                    <button className="btn btn-primary" onClick={() => alert("Checkout")}>Checkout</button>
                </div>
                )
            }
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(Basket);
