import React from 'react';
import { connect } from 'react-redux';
import util from '../utilities/util';
import { removeFromCart } from '../actions/cartActions';
import { AppState } from '../reducers/index';
import { IProduct, IBasketProps} from '../types';
 
  
const Basket:  React.FC<IBasketProps>  = (props) => {

    const { cartItems } = props;

    return (
        <div className="ui card cart-card" >
            <div className="content">
                <div className="header"><i className="shopping cart icon">&nbsp;</i> Cart</div>
            </div>
            <div className="content">
                {cartItems.length === 0 ? <div>Basket is empty.</div> : <p> You have {cartItems.length} products in the basket.</p>}
            </div>
            
            
            {cartItems.length > 0 && (
                <div className="content">
                        {cartItems.map((item: IProduct) => 
                            (
                            <div  className="" key={item.id}>
                            - <span className="cart-item-title">{item.title}</span>
                                x{item.count} = ${item.price * item.count}
                                <a
                                    className="btn btn-danger" 
                                    onClick={() => props.removeFromCart(props.cartItems, item)}
                                >
                                    X
                                </a>
                            </div>
                            )
                        )}
                    <div className="cart-total">Total: {util.formatCurrency(cartItems.reduce((a: any, c: any) => a + c.price*c.count, 0))}</div>
                    <button className="ui red button" onClick={() => alert("Checkout")}>Checkout</button>
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
