// Library
import React from 'react'
import { Link } from 'react-router-dom';
// CSS
import "./NavBar.css"
// Icons
import { IconContext } from "react-icons";
import { CiViewList } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";


function NavBar() {
  return (
    // Icon settings here
    <IconContext.Provider value={{size:"2rem", color:"#fff"}}>
    <nav>
        <ul>
          <li><a href="https://johnfajardodev.netlify.app/" target='_blank' rel="noopener noreferrer" ><h1 className='name'>JF</h1></a></li>
            <li><Link to="/"><CiViewList /></Link></li>
            <li><Link to="/add"><IoIosAdd /></Link></li>
        </ul>
    </nav>
        </IconContext.Provider>
  )
}

export default NavBar