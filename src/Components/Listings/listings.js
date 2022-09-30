import '../../CSS/index.css'
import React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxyu7ou0WSzQYk63StiYtCVG-XtUPpqNs",
    authDomain: "offcampusatmac.firebaseapp.com",
    projectId: "offcampusatmac",
    storageBucket: "offcampusatmac.appspot.com",
    messagingSenderId: "546109308935",
    appId: "1:546109308935:web:a52c2ee6d7cc1bae822aa2",
    measurementId: "G-7CFVGFQXE8",
    databaseURL: "https://offcampusatmac.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

class Listings extends React.Component{

    constructor(props)
    {
        super(props);
        this.state =
            {
                checked: true
            }
    }

    updateValue(): boolean
    {
        this.setState(prevState => ({checked: !prevState.checked}));
    }

    render()
    {
        return (
            <>
                <div style={{position: 'relative'}}>
                    <div style={{textAlign: 'center',  paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                        <section id={"listings"}>
                            <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#01426A'}}>Available Listings</h1>
                        </section>
                    </div>
                    <PrimaryButton text="Primary" onClick={this.updateValue()} style={{backgroundColor: this.state.checked ? "red" : "blue"}} allowDisabledFocus />
                </div>
                <div className="separator" />
            </>
        );
    }

}

export default Listings;