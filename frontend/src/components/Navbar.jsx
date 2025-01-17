import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
  <nav>
    <Link to='/'> Home</Link>
    <Link to='/show-products'> Show Products</Link>
    <Link to='/create-product'> Create Product</Link>
    <Link to='/about'> About</Link>
    <Link to='/contact'> Contact</Link>
  </nav>
  )
}

export default Navbar
