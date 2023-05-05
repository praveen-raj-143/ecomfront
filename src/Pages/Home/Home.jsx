import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Bestseller from '../../Components/Bestseller/Bestseller'
import "../Ipad/Ipad.css"
const Home = () => {
  return (
    <div>
      <Banner/>
      <h1>Best Sellers</h1>
      <Bestseller/>
    </div>
  )
}

export default Home
