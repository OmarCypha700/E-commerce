import React from 'react'
import { Navbar, Home, Cart, Products, ProductView} from './Components'
import { commerce } from "./lib/commerce";
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import "./index.css"

const App = () => {

    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
      const { data: products } = await commerce.products.list();
      const { data: categoriesData } = await commerce.categories.list();
      const productsPerCategory= categoriesData.reduce((acc, category) => {
        return [
          ...acc,
          {
            ...category,
            productsData: products.filter((product) => 
            product.categories.find((cat)=> cat.id === category.id)
            ),
          },
        ];
      }, []);
      setCategories(productsPerCategory);
    };

    const fetchCart= async () => {
        setCart(await commerce.cart.retrieve());
      }

    const addToCart = async (productId, quantity) => {
      setCart(await commerce.cart.add(productId, quantity));
    }

    const handleUpdateCartQty = async (productId, quantity) => {
      setCart(await commerce.cart.update(productId, { quantity }));
    }

    const handleRemoveFromCart = async (productId) => {
      setCart(await commerce.cart.remove(productId));
    }

    const handleEmptyCart = async () => {
      setCart(await commerce.cart.empty());
    }


    useEffect(()=>{
      fetchProducts();
      fetchCart();
      
    }, [])

    // console.log(cart)
    // console.log(categories)

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

          <Route exact path="/shop" element={
          <Products 
          categories={categories} 
          onAddToCart={addToCart}
          />
          }/>

        <Route exact path="/shop/product-view/:id" element={
          <ProductView
          onAddToCart={addToCart}/>
          }/>

          <Route exact path="/" element={
          <Home />
          }/>

        </Routes> 
    </div>
    </Router>
  )
}

export default App