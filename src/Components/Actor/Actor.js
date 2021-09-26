import React from 'react';
import './Actor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Actor = (props) => {
    // console.log(props);
    const { name, networth, img, birthplace, industry, Age, Years } = props.actor;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const facebook = <i class="fab fa-facebook-square fa-2x"></i>;
    const twitter = <i class="fab fa-twitter-square fa-2x"></i>;
    const instagram = <i class="fab fa-instagram fa-2x"></i>;
    return (
        <div className="single-actor">
            <img src={img} style={{ width: "150px", height: "150px", borderRadius: "50%" }} alt="" srcset="" />
            <div className="actor-details">
                <h2>{name}</h2>
                <p><span className="bold">Age : </span>{Age}</p>
                <p><span className="bold">Birthplace :</span> {birthplace}</p>
                <p><span className="bold">Active Years :</span> {Years}</p>
                <p><span className="bold">Industry : </span>{industry}</p>
                <p><span className="bold">Gross Net Worth :</span> ${networth}</p>

            </div>
            <div>
                <button
                    onClick={() => props.handleAddtoCart(props.actor)}
                    className="btn-cart"> {shoppingCart} Add to Cart</button>
            </div>
            <div className="social-icons">
                <p>{facebook}</p>
                <p>{twitter}</p>
                <p>{instagram}</p>
            </div>
        </div>
    );
};

export default Actor;