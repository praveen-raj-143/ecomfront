import React, { useEffect, useState } from 'react'
import "./Ipad.css"

const Ipad = () => {
  const [detail,setDetail]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5245/accessories")
    .then(res=>res.json())
    .then(data=>setDetail(data))
  })

  return (
    <div className='parent'>
      {detail.filter((item)=> item.catagory=== "Ipad").map((items, index)=>{
        return(
          <div className='item'>
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

export default Ipad
