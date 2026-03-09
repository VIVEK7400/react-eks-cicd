import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ennaarlogo.png';


export function Navbar() {
    const location = useLocation(); // Get the current location

    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top"
            style={{
                backgroundColor: '#02073f',
                borderBottom: '5px solid red',
                opacity: '100%',
                zIndex: 1030, // Ensures the navbar stays on top
            }}
        >
            <div className="container-fluid">
                {/* Logo */}
                <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                    aria-label="Ennaar Energy Systems"
                >
                    <img
                        src={Logo}
                        alt="Ennaar Energy Systems Logo"
                        style={{
                            height: '40px',
                            marginRight: '10px',
                            backgroundColor: 'white',
                            padding: '2px',
                            borderRadius: '5px',
                        }}
                    />
                    Ennaar Energy Systems
                </Link>

                {/* Toggler for small screens */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/product') ? 'active' : ''}`} to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/profile') ? 'active' : ''}`} to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/enquiry') ? 'active' : ''}`} to="/enquiry">Enquiry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


