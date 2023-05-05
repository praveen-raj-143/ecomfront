import React, { useState, useEffect } from 'react'

const Cart = () => {
  const [cart, setCart]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5245/cartitems")
    .then(res=>res.json())
    .then(cart=>setCart(cart))
  }, [])



  useEffect(()=>{},[cart])
  const updateCart =({mobile,type})=>{

    fetch(`http://localhost:5245/cartitems=${type}`,{
      method:"PUT",
      body:JSON.stringify(mobile),
      headers:{
        "Content-Type": "application/json",
      }
    }).then((data)=>data.json())
    .then((cart)=>setCart(cart))
    

  }
  return (
    <div>
      <h1>List of Items</h1>
      {cart.map((items, index)=>{
        return(
          <div className='item'>
            <img className='itemimg' src={items.image} alt='not found'/>
            <h3>{items.name}</h3>
            <p>Rating :</p><img className='itemrate' src={items.rating} alt='not found'/>
            <p>Offer Price : {items.price}</p>
            <p>Original Price : {items.oprice}</p>
            <button onClick={()=>updateCart({items, type:"increment"})}>+</button>

            <button onClick={()=>updateCart({items, type:"decrement"})}>-</button>
          </div>
        )
      })}
      
    </div>
  )
}

export default Cart
