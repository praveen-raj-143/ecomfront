import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header/Header'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <Header/>
        <ul className='Nav'>
        <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOME</NavLink></li>
        <li><NavLink to='/ipad' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>IPAD</NavLink></li>
        <li><NavLink to='/iphone' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>MOBILE</NavLink></li>
        <li><NavLink to='/macbook' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>LAPTOP</NavLink></li>
        <li><NavLink to='/accessories' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>ACCESSORIES</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
