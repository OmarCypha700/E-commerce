import React from "react";
import {Grid, Container, Typography} from "@mui/material"
import Product from "./Product/Product";

import "./Products.css";

const Products = ({ categories, onAddToCart }) => {
  
  if(!categories.length) return "Loading..."

  return (
    <div> 
      {categories.map((category) => {
        return (
          <Container className="container" key={category.id}>
            <Typography variant="h5" className="cat__name">
              {category.name}
            </Typography>
          <Grid container justify="center" spacing={4}>
            {category.productsData.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} >
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
          </Container>
        );
      })}
    </div>
  ); 
};

export default Products;