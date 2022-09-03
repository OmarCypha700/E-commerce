import React from 'react'
import Product from "./Product/Product";

import "./Products.css"


const Products = ({ products, onAddToCart }) => {

  return (
    <main className='container'>
        {products.map((product) => (
            <div key={product.id}>
                <Product product={product} onAddToCart={onAddToCart}/>
            </div>
        ))}
    </main>
  )
}

export default Products