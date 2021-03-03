import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props)
    const cart = props.cart
    const total = cart.reduce((total,prd)=> total+prd.price ,0)
    // let total = 0;
    // for (let i=0 ; i < cart.length ; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }
    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = total / 10;
    const formatNumber = num =>{
        const formatted = Math.round(num)
        return Number(formatted);
    }
    const grandTotal = total + tax + shipping;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product price : {total}</p>
            <p>Shipping :{formatNumber(shipping)} </p>
            <p><small>Tax+VAT :{formatNumber(tax)} </small></p>
            <p>Total price : {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;