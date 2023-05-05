import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Ipad from '../Pages/Ipad/Ipad'
import Iphone from '../Pages/Iphone/Iphone'
import Macbook from '../Pages/Macbook/Macbook'
import Accessories from '../Pages/Accessories/Accessories'
import Cart from '../Pages/Cart/Cart'
import Signup from '../Pages/signup/Signup'

const RouteFile = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/iphone' element={<Iphone/>}/>
        <Route path='/macbook' element={<Macbook/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
  )
}

export default RouteFile
