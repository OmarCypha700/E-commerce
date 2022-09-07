import {Button, Typography} from "@mui/material"
import {commerce} from "../../lib/commerce"
import {useState, useEffect} from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Spinner from "../Spinner"

import "./ProductView.css"


const markUp = (text) =>{
    return {__html:text};
};

const ProductView = ({onAddToCart}) => {

    const [product, setProduct]= useState({});
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading]= useState(true)

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, image, description, quantity } = response;
        setProduct({
            name, 
            price: price.formatted_with_symbol, 
            image: image.url, 
            description, 
            quantity
        });
    };


      const handleUpdateCartQty = (param) => {
        if(param === 'increase' && quantity < 10){
            setQuantity(quantity + 1)
        }
        if(param === 'decrease' && quantity > 1){
            setQuantity(quantity - 1)
        }
      }

    useEffect(()=>{
        const id = window.location.pathname.split('/');
        fetchProduct(id[3]);
    }, [])

  return (
   
        <div className="container">
            <div className="img__wrapper">
                <img 
                onLoad = {()=>{
                    setLoading(false);
                }}
                src={product.image} alt={product.name} />

                {loading && <Spinner/>}
            </div>
            
            <div className='text'>
                <Typography variant="h1">{product.name}</Typography>
                <Typography variant="body1" dangerouslySetInnerHTML={markUp(product.description)}/>
                <Typography variant="h3">Price: {product.price}</Typography>
                
                <span>
                    <Button size='small' variant='contained' onClick={()=> handleUpdateCartQty("decrease")}> -</Button>
                    <Typography>
                        Quantity: {quantity}
                    </Typography>
                    <Button size='small' variant='contained' onClick={()=> handleUpdateCartQty("increase")}> +</Button>
                </span>

                    <button 
                    className='button' 
                    onClick={() =>{ 
                        const id = window.location.pathname.split('/');
                        onAddToCart(id[3], quantity);
                        }}> 
                    Add to cart <AddShoppingCartIcon/> 
                    </button>
            </div>    
        </div>
  )
}

export default ProductView