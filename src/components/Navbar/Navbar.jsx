import React from 'react'
import logo from "./assets/logo.jpg"
import search from "./assets/search_icon.png"
import explore from "./assets/Explore.png"
import star from "./assets/Hobbies.png"
import bookmark from './assets/bookmark.png'
import notification from './assets/notifications.png'
import product from './assets/Product.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img style={{height: "60px", marginLeft: "97px", width: "293.26px"}} src={logo}/>
        </a>

        <div className="input-group mb-3" id="search_bar">
          <input  type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <span className="input-group-text" id="basic-addon2"><img id="search_icon" src={search} /></span>
        </div>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-sub">
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              > <img src={explore} />
                Explore
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">People - Community</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Products - Store</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              > <img src={star} />
                Hobbies
              </a>

            </li>

            <div className="badge-container">
              <img className='badges' src={bookmark} />
              <img className='badges' src={notification} />
              <img className='badges' src={product} />
            </div>


            <li>
            <button type="button" class="btn btn-outline-secondary custom-outline-button">Sign in</button>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;


