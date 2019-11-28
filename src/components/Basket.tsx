import React from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { removeFromCart } from '../actions/cartActions';
import { AppState } from '../reducers/index';
import { IProduct, IBasketProps} from '../types';
 
  
const Basket:  React.FC<IBasketProps>  = (props) => {

    const { cartItems } = props;

    return (
        <div className="alert alert-info" >
            <div><i className="shopping cart icon">&nbsp;</i> Cart</div>
            {cartItems.length === 0 ? <div>Basket is empty.</div> : <p> You have {cartItems.length} products in the basket.</p>}
            {cartItems.length > 0 && (
                <div>
                    <ul>
                        {cartItems.map((item: IProduct) => 
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
                    Total: {util.formatCurrency(cartItems.reduce((a: any, c: any) => a + c.price*c.count, 0))}
                    <br />
                    <button className="btn btn-primary" onClick={() => alert("Checkout")}>Checkout</button>
                </div>
                )
            } 
        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps, { removeFromCart })(Basket);
