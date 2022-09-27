import React from 'react';
import Scrollspy from 'react-scrollspy';
import '../../CSS/Navbar.css';

export default function Navbar() {
    return (
        <nav className="desktop-navigation" style={{boxShadow: '1px 7px 9px #0f0f0f'}}>
            <h2>OffCampus@Mac</h2>
            <Scrollspy
                items={['home', 'listings', 'profile', 'aboutus']}
                currentClassName="active"
            >
                <li><a href="#home">Home</a></li>
                <li><a href="#listings">Listings</a></li>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#aboutus">About Us</a></li>
            </Scrollspy>
        </nav>
    );
}
