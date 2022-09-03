import React from 'react'

import save from './images/illustrations/savings.png'
import fastDelivery from './images/illustrations/fast-delivery1.png'
import shopConvenient from './images/illustrations/shop-conveniently.gif'
import saveTime from './images/illustrations/save-time.gif'
import quality from './images/illustrations/quality.png'

import "./Feature.css"

const Feature = () => {
  return (
    // Features section begin
    <section id='feature'>

         <div className='feature__box'>
         <img src={save} alt="Save money" />
         <h6>Save Money</h6>
         </div>

         <div className='feature__box'>
         <img src={fastDelivery} alt="Fast Delivery" />
         <h6>Fast Delivery</h6>
         </div>

         <div className='feature__box'>
         <img src={shopConvenient} alt="Shop conveniently" />
         <h6>Shop conveniently</h6>
         </div>

         <div className='feature__box'>
         <img src={saveTime} alt="Save Time" />
         <h6>Save Time</h6>
         </div>

         <div className='feature__box'>
         <img src={quality} alt="High quality products" />
         <h6>Quality Products</h6>
         </div>
    </section>
    // Features section end 
  )
}

export default Feature