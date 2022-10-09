import React from 'react'
import {Link} from 'react-router-dom'
import "./Hero.css"


const Hero = () => {

  return (

   <section>

    <div id='hero__section'>
        <h2>Get amazing <strong>clothes</strong> and <strong>shoes</strong></h2>
        <h1>At the <strong>chepest price</strong> </h1>
        <h3>Save money while wearing quality</h3>
        <Link to="/shop"><button>Shop Now</button></Link>
    </div>

    </section>
  )
}

export default Hero