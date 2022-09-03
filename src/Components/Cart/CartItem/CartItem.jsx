import React from 'react'
import { Typography, Card, Button, CardActions, CardContent } from '@mui/material';

import "./CartItem.css"

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {

  return (
    <Card className='card'>
        
        <CardContent className="cardContent">
        <img src={item.image.url} alt={item.name} className="media" />
            <p className="item__name">{item.name}</p>
            <p className="item__name">{item.line_total.formatted_with_symbol}</p>
        </CardContent>
        <CardActions className="cardActions">

            <div className="buttons">
                <Button type='button' size='large' className="quantity" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' size='large' className="quantity" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
            </div>

            <button variant="contained" type='button' size='small' className='remove__btn' onClick={()=> onRemoveFromCart(item.id)}>Remove</button>

        </CardActions>
    </Card>
  )
}

export default CartItem