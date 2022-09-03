import React from 'react'
import { Navbar, Cart, Products } from './Components'
import { commerce } from "./lib/commerce";
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import "./index.css"

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
    const {data} = await commerce.products.list();

      setProducts(data)
    }

    const fetchCart= async () => {
        setCart(await commerce.cart.retrieve())
      }

    const addToCart = async (productId, quantity) => {
      const {cart} = await commerce.cart.add(productId, quantity);

      setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
      const {cart} = await commerce.cart.update(productId, { quantity });

      setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
      const {cart} = await commerce.cart.remove(productId);

      setCart(cart);
    }

    const handleEmptyCart = async () => {
      const {cart} = await commerce.cart.empty();

      setCart(cart);
    }


    useEffect(()=>{
      fetchProducts();
      fetchCart();
      
    }, [])

    console.log(cart)

  return (
    <Router>
    <div>
        <Navbar cart={cart}/>
        <Routes>

          <Route exact path="/cart" element={
          <Cart 
          cart={cart} 
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}
          />
          }/>
    
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path="/" element={<Products products={products} onAddToCart={addToCart}/>}/>

        </Routes> 
    </div>
    </Router>
  )
}

export default App