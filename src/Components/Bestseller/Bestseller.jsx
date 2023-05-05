import React, { useEffect, useState } from 'react'
import "../../Pages/Ipad/Ipad.css"
const Bestseller = () => {
    
    const [best,setBest]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5245/bestseller")
      .then(res=>res.json())
      .then(data=>setBest(data))
    })
  
    return (
      <div className='parent'>
        {best.map((items, index)=>{
          return(
            <div className='item' key={index}>
              <img className='itemimg' src={items.image} alt='not found'/>
              <h3>{items.name}</h3>
              <p>Rating :</p><img className='itemrate' src={items.rating} alt='not found'/>
              <p>Offer Price : {items.price}</p>
              <p>Original Price : {items.oprice}</p>
              <button>Add to cart</button>
            </div>
          )
        })}
      </div>
    )
}

export default Bestseller
