import React from 'react';
import Scrollspy from 'react-scrollspy';
import '../../CSS/Navbar.css';
import image from "../../Resources/MacLogo.png";

export const Navbar: React.FunctionComponent<> = props => {
    return (
        <nav className="desktop-navigation" style={{boxShadow: '1px 7px 9px #0f0f0f'}}>
            <div style={{display:'flex'}}>
            <img src={image} alt="Nothing" style={{width: '60px', height: '60px'}}/>
            <h2>OffCampus@Mac</h2>
            </div>
            <Scrollspy
                items={['home', 'listings', 'addListing', 'aboutus']}
                currentClassName="active">
                <li><a href="#home">Home</a></li>
                <li><a href="#listings">Listings</a></li>
                <li><a href="#addListing">Add Listing</a></li>
                {/*<li><a href="#profile">Profile</a></li>*/}
                <li><a href="#aboutus">About</a></li>
            </Scrollspy>
        </nav>
    );
}

export default Navbar;