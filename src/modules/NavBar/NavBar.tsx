import React from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
// Icons
import { IconContext } from "react-icons";
import {FaTasks} from "react-icons/fa"
import { GoHomeFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";

function NavBar() {
  return (
    <IconContext.Provider value={{size:"2rem", color:"#000"}}>
    <nav>
        <ul>
            <li><Link to="/"><GoHomeFill /></Link></li>
            <li><Link to="/tasks"><FaTasks/></Link></li>
            <li><Link to="/calendar"><FaCalendarAlt /></Link></li>
        </ul>
    </nav>
        </IconContext.Provider>
  )
}

export default NavBar