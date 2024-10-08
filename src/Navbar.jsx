import React from 'react'
import NavbarStyling from './assets/styling/Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about-us"}>About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/image-gallery"}>Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/feedback"}>Feedback</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/contact-us"}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar