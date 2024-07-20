import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
// Icons
import { IconContext } from "react-icons";
import {FaTasks} from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp} from "react-icons/io5";

function NavBar() {
  return (
    <IconContext.Provider value={{size:"2rem", color:"#fff"}}>
    <nav>
        <ul>
            <li><Link to="/"><FaTasks/></Link></li>
            <li><Link to="/add"><FaTasks/></Link></li>
        </ul>
    </nav>
        </IconContext.Provider>
  )
}

export default NavBar