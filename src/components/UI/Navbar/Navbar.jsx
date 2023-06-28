import { Link } from "react-router-dom";
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar__lincs">
      <Link to='/about'>O сайте</Link>  
      <Link to='/posts'>Посты</Link>  
    </div>
  </div>
  )
}

export default Navbar;