import React from 'react';
import UseCart from '../../Hooks/UseCart';

const Cart = () => {
    const {cart}=UseCart()
    return (
        <div>
            <h3>my cart</h3>
        </div>
    );
};

export default Cart;