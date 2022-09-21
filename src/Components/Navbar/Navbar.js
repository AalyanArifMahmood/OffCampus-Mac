import React from 'react';
import Scrollspy from 'react-scrollspy';
import '../../CSS/Navbar.css';

// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu
// } from './NavbarElements';

export default function Navbar() {
    return (
        <nav className="desktop-navigation">
            <h2>OffCampus@Mac</h2>
            <Scrollspy
                items={['home', 'listings', 'about', 'contact']}
                currentClassName="active"
            >
                <li><a href="#home">Home</a></li>
                <li><a href="#listings">Listings</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </Scrollspy>
        </nav>
    );
}
