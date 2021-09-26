import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import './Actors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';


const Actors = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setActors(data));
    }, []);

    const handleAddtoCart = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="actors-container">
                {
                    actors.map(actor => <Actor
                        key={actor.key}
                        actor={actor}
                        handleAddtoCart={handleAddtoCart}
                    ></Actor>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Actors;