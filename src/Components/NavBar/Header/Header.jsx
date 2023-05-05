import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <h1 className='header'>iSHOP</h1>
        <Link to="/cart"><button className='cart'>CART</button></Link>
    </div>
  )
}

export default Header
