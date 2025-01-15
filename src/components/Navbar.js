
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

 const Navbar = () => {
  return (
    <div>
        <Link to={"/all-group"}>
        <button className="itemButton">All Group</button>
        </Link>
        <Link to={"/science-group"}>
        <button className="itemButton">Science</button>
        </Link>
        <Link to={"/engineer-group"}>
        <button className="itemButton">Engineer</button>
        </Link>
        <Link to={"/arts-group"}>
        <button className="itemButton">Arts</button>
        </Link>
       
    </div>
  )
}
export default Navbar;