import React from 'react';
import '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
       <div><Link to={'/'}><h1>React Books App</h1></Link></div>
       <div><Link to={'/favorites'}>
       <h2 className='favorites-link'>Your favorites</h2>
       </Link></div>
    </div>
  )
}

export default Navbar
