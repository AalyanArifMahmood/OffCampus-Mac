import React from 'react';
import Info from './Components/MainPage/Main_Page'
import Navbar from './Components/Navbar/Navbar';
import Listings from './Components/Listings/listings'
import Profile from './Components/Profile/profile'
import AboutUs from "./Components/About Us/AboutUs";
import Footnote from "./Components/Footnote/footnote";
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
                <Listings/>
                <Profile/>
                <AboutUs/>
                <Footnote/>
            </>
        );
    }
}
// function App() {
//     return (
//         <>
//             <Navbar />
//             <br/>
//             <br/>
//             <Info/>
//             <Listings/>
//             <Profile/>
//             <AboutUs/>
//             <Footnote/>
//         </>
//     );
// }

export default App;
