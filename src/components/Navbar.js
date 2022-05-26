import React from 'react'
import { Link } from "react-router-dom";
import './Navbarstyle.css'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2 navbar-custom">
        <Link to="/" className="navbar-brand ms-5">
            <h3>fluid Contact</h3>
        </Link>
    
        <div>
          <SearchBar/>
        </div>
    </nav>
  


  )
}

export default Navbar