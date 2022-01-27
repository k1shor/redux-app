import React from 'react';
import { useSelector } from 'react-redux';

const DisplayStore = () => {
    const cart = useSelector(store => store.cartValue.cart_value)
    return (
        <>
            <h1>No. of items in the cart : {cart}</h1>

        </>);
};

export default DisplayStore;
