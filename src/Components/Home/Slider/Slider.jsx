import React from 'react'
import {Link} from 'react-router-dom'
import "./Slider.css"


const Slider = () => {

  return (

   <section>

    <div id='first'>
        <h2>Get amazing <strong>clothes</strong> and <strong>shoes</strong></h2>
        <h1>At the <strong>chepest price</strong> </h1>
        <h3>Save money while wearing quality</h3>
        <Link to="/shop"><button>Shop Now</button></Link>
    </div>

    </section>
  )
}

export default Slider