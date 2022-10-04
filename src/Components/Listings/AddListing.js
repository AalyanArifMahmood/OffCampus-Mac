import '../../CSS/index.css'
import React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import {TextField} from "@fluentui/react";
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';

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
    databaseURL: "https://offcampusatmac-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300, marginLeft: '40%' } },
};

class AddListings extends React.Component{

    constructor(props)
    {
        super(props);
        this.state =
            {
                checked: true
            }
    }

    updateValue = () =>
    {
        this.setState(prevState => ({checked: !prevState.checked}));
    }

    writeUserData() {
        set(ref(database, document.getElementById("addressBox").value), {
            name: document.getElementById("nameBox").value,
            email: document.getElementById("emailBox").value,
            address: document.getElementById("addressBox").value,
            rent: document.getElementById("rentBox").value
        });
        document.getElementById("nameBox").value = "";
        document.getElementById("emailBox").value = "";
        document.getElementById("addressBox").value = "";
        document.getElementById("rentBox").value = "";
    }

    render()
    {
        return (
            <>
                <div style={{position: 'relative'}}>
                    <div style={{textAlign: 'center',  paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                        <section id={"addListing"}>
                            <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Add a Listing</h1>
                        </section>
                    </div>
                </div>
                <Stack {...columnProps}>
                    <TextField label="Name " required errorMessage="" id={"nameBox"}/>
                    <TextField label="Listing Address" required errorMessage="" id={"addressBox"} />
                    <TextField label="Contact Email" required errorMessage=""  mask="m\ask: @macalester.edu" id={"emailBox"}/>
                    <TextField label="Rent" required errorMessage="" id={"rentBox"}/>
                </Stack>
                <br/>
                <PrimaryButton text="Add Listing" onClick={this.writeUserData} style={{marginLeft: "45%"}}  allowDisabledFocus />
                <div className="separator" />
            </>
        );
    }

}

export default AddListings;