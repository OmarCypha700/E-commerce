import React from 'react'
import "./Slider.css"


const Slider = () => {

      // function for auto slider
      let counter = 1;
      setInterval(()=>{
          document.getElementById("radio" + counter).checked = true;
          counter++;
          if(counter > 4){
              counter = 1;
          }
      },5000)
      

  return (

   <section className ="slider__body">
   <div className='slider'>
       <div className="slides">

   <input type="radio" name='radio__btn' id='radio1' />
   <input type="radio" name='radio__btn' id='radio2' />
   <input type="radio" name='radio__btn' id='radio3' />
   <input type="radio" name='radio__btn' id='radio4' />

   {/* slide images start */}

   <div id='first' className="slide first">
       <h2>Get amazing clothes</h2>
       <h1>At the chepest prices</h1>
       <h4>Save money while wearing quality</h4>
       <button>Shop Now</button>
   </div>

   <div id='second' className="slide first">
       <h2>Get sleek sneakers</h2>
       <h1>At the chepest prices</h1>
       <h4>Save money while wearing quality</h4>
       <button>Shop Now</button>
   </div>

   <div id='third' className="slide first">
       <h2>Get amazing clothes</h2>
       <h1>At the chepest prices</h1>
       <h4>Save money while wearing quality</h4>
       <button>Shop Now</button>
   </div>

   <div id='fourth' className="slide first">
       <h2>Get amazing leather shoes</h2>
       <h1>At the chepest prices</h1>
       <h4>Save money while wearing quality</h4>
       <button>Shop Now</button>
   </div>
   {/* slide images end */}
   
       </div>
   {/* manual slider start */}
   <div className="nav__manual">
       <label htmlFor="radio1" className='manual__btn'></label>
       <label htmlFor="radio2" className='manual__btn'></label>
       <label htmlFor="radio3" className='manual__btn'></label>
       <label htmlFor="radio4" className='manual__btn'></label>
   </div>
   {/* manual slider end */}
   </div>
   {/* image slider end */}
    </section>
  )
}

export default Slider