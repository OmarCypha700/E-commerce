import React from 'react'
import {Card, CardContent, IconButton,CardActions,Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom'
import "./Product.css"


const Product = ({ product, onAddToCart }) => {


  return (
    <Card className='product__card'>
      
        <img src={product.image.url} alt={product.name} />

        
        <CardContent className='card__content'>
          <Link to={`product-view/${product.id}`} className='link'>
            <Typography variant='body1'>{product.name}</Typography>
            <Typography variant='body1'>{product.price.formatted_with_symbol}</Typography>
          </Link>
        </CardContent>
        

        <CardActions className="card__action">
          <IconButton onClick={() => onAddToCart(product?.id, 1)}>
              <AddShoppingCartIcon aria-label='Add to Cart'/>
          </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product