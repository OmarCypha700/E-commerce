import React from 'react'
import {Link} from 'react-router-dom'
import CartItem from './CartItem/CartItem';

import "./Cart.css"

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {

    const EmptyCart = () => (
        <h3>You have no items in your shopping cart, start adding some!
            <Link to="/shop"> start adding some!</Link>
        </h3>
    );

    const FilledCart = () => (
        <>
        <div className="filled__container">
        {cart.line_items.map((item) => (
            <div key={item.id}>
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
            </div>
        ))}
        </div>

        <div className="cart__details">
            <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
            <div className='buttons'>
                <button className="empty__btn" onClick={handleEmptyCart}>Empty Cart</button>
                <button className="checkOut__btn">Checkout</button>
            </div>  
        </div>
        </>
    )

    if(!cart.line_items) return "Loading ..."

  return (
    <div className='container'>
       <h1>Your ShoppingCart</h1> 
       { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </div>
  )
}

export default Cart