import React from 'react'
import img1 from "../images/img1.png"
import "../Css/NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
            <div class="container">
              <a class="navbar-brand " href="aaaa"> <img src={img1} alt="Logo"/> TENT</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="main">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-fill">
                  <li class="nav-item">
                    <Link class="nav-link p-lg-3  active " aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link p-lg-3 active " to="/Gallary">Gallary</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link p-lg-3 active " to="/AboutUs">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link p-lg-3 active " to="/Contact">Contact</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link p-lg-3 active " to="/Services">Services</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/LogIn" class="nav-link p-lg-3 active " >Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    </>
  )
}

export default NavBar