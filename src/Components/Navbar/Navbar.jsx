import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <header>
      <nav>
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="allusers" className="navbar-item">All Users</Link>
        <Link to="userprofile" className="navbar-item">User Profile</Link>
        {/* <Link to="allcomments" className="navbar-item">Contact user</Link>  */}
      </nav>
    </header>
    </>
  )
}

export default Navbar