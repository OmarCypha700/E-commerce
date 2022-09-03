import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import {Link} from 'react-router-dom'
import "./Product.css"


const Product = ({ product, onAddToCart }) => {

    // console.log(product)

  return (
    <div className='product__card'>
        <img src={product.image.url} alt={product.name} />
        <div className='card__content'>
            <h3>{product.name}</h3>
            <h3>{product.price.formatted_with_symbol}</h3>
        </div>
        {/* <p dangerouslySetInnerHTML={{__html:product.description}}/> */}
        <div className="card__action" >
            <AddShoppingCartIcon aria-label='Add to Cart' onClick={() => onAddToCart(product?.id, 1)}/>
        </div>
           
    </div>
  )
}

export default Product