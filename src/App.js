import React from 'react';
import Info from './Components/MainPage/Main_Page'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/profile'
import AboutUs from "./Components/About Us/AboutUs";
import Footnote from "./Components/Footnote/footnote";
import AddListings from "./Components/Listings/AddListing";
import './CSS/App.css';
// import {getAuth, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
//
// const auth = getAuth()
// const provider = new GoogleAuthProvider()


class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state=
        {
            done: false
        }
    }

    // componentDidMount() {
    //     if(!this.state.done)
    //     {
    //         signInWithRedirect(auth, provider).then(()=>
    //         {
    //             this.setState(prevState => ({done: !prevState.done}));
    //         })
    //     }
    //
    // }

    render()
    {
        return (
            <>
                <Navbar />
                <br/>
                <br/>
                <Info/>
                <AddListings userNow={this.props.userNow}/>
                {/*/!*<Profile/>*!/*/}
                {/*<AboutUs/>*/}
                {/*<Footnote/>*/}
            </>
        );
    }
}

export default App;
