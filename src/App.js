import React from 'react';
import Info from './Components/MainPage/Main_Page'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile'
import AboutUs from "./Components/About Us/AboutUs";
import Footnote from "./Components/Footnote/footnote";
import AddListings from "./Components/Listings/AddListing";
import './CSS/App.css';

class App extends React.Component
{
    render()
    {
        return (
            <>
                <Navbar />
                <br/>
                <br/>
                <Info/>
                <AddListings/>
                {/*<Profile/>*/}
                <AboutUs/>
                <Footnote/>
            </>
        );
    }
}

export default App;
