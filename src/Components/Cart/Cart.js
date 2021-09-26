import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons'
import Selected from '../Selected/Selected';
const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    console.log(props.cart);
    let Total = 0;
    const { cart } = props;
    for (const actor of cart) {
        Total = Total + actor.networth;
    }
    return (
        <div>
            <div>
                <h3>{element} Actors Chosen : <span className="purchase">{props.cart.length}</span></h3>
                <h3>{dollar} Total Combined Assests  : <span className="purchase"> $ {Total}</span></h3>
            </div>
            <div>
                {
                    cart.map(aa => <Selected img={aa.img} name={aa.name}></Selected>)
                }
            </div>
        </div>
    );
};

export default Cart;