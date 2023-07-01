import React from 'react';
import img1 from '../images/img1.png';
import '../Css/NavBar.css';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  // Check if token exists in local storage
  const token = localStorage.getItem('token');
  // window.location.href = '/';

  // Function to handle logout
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    // Refresh the page to reset the state
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
          <div className="container">
            <a className="navbar-brand" href="aaaa">
              <img src={img1} alt="Logo" /> TENT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main"
              aria-controls="main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link p-lg-3  active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-lg-3 active" to="/Gallary">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-lg-3 active" to="/AboutUs">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-lg-3 active" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-lg-3 active" to="/Services">
                    Services
                  </Link>
                </li>
                {token ? (
                  <NavDropdown title="My Account" className='p-lg-2 ' id="basic-nav-dropdown">
                    <NavDropdown.Item className=' nav-link' as={Link} to="/Profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout} className=' nav-link'as={Link} to="/">Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/Login" className="nav-link p-lg-3 active">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/PartnerPage" className="nav-link p-lg-3 active">
                        Join us
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
