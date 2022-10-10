import '../../CSS/index.css'
import * as React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {TextField} from "@fluentui/react";
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';

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
const database = getDatabase(app);


const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300, marginLeft: '40%' } },
};


// This is where the class starts
class AddListings extends React.Component
{
    constructor() {
        super();
        this.state=
        {
            listings: []
        }
    }

    componentDidMount() {
        this.readUserData()
    }


    readUserData = () =>
    {
        const listRef = ref(database, 'items');
        let tempListings = []
        onValue(listRef, (snapshot) => {
            snapshot.forEach(function(childSnapshot)
            {
                tempListings.push(childSnapshot.val().name)
            })
        });
        this.setState(prevState => ({
            listings: [...prevState.listings, tempListings]
        }))
    }

    writeUserData = () => {
        if (!(document.getElementById("addressBox").value === "") || !(document.getElementById("nameBox").value === "") ||
            !(document.getElementById("rentBox").value === "") || !(document.getElementById("emailBox").value === ""))
        {
            set(ref(database, 'items/' + document.getElementById("addressBox").value), {
                name: document.getElementById("nameBox").value,
                email: document.getElementById("emailBox").value,
                address: document.getElementById("addressBox").value,
                rent: document.getElementById("rentBox").value
            });
        }
    }


    render()
    {
        if(this.state.listings.length === 0)
        {
         return (
             <>
                 <div style={{position: 'relative'}}>
                     <div style={{textAlign: 'center', paddingLeft: '10%', bottom: '35%', paddingRight: '10%'}}>
                         <section id={"listings"}>
                             <h1 style={{
                                 fontSize: '6vh',
                                 fontFamily: 'Newslab, georgia, Bakersville',
                                 color: '#000000'
                             }}>Available Listings</h1>
                         </section>
                     </div>
                 </div>

                 <div className="separator"/>

                 <div style={{position: 'relative'}}>
                     <div style={{textAlign: 'center', paddingLeft: '10%', bottom: '35%', paddingRight: '10%'}}>
                         <section id={"addListing"}>
                             <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Add
                                 a Listing</h1>
                         </section>
                     </div>
                 </div>
                 <Stack {...columnProps}>
                     <TextField label="Name " required id={"nameBox"} onGetErrorMessage={value => {
                         if (value === '') {
                             return 'This field is required';
                         }
                     }}/>
                     <TextField label="Listing Address" required id={"addressBox"} onGetErrorMessage={value => {
                         if (value === '') {
                             return 'This field is required';
                         }
                     }}/>
                     <TextField label="Contact Email" required mask="m\ask: @macalester.edu" id={"emailBox"}
                                onGetErrorMessage={value => {
                                    if (value === '') {
                                        return 'This field is required';
                                    }
                                }}/>
                     <TextField label="Rent" required id={"rentBox"} onGetErrorMessage={value => {
                         if (value === '') {
                             return 'This field is required';
                         }
                     }}/>
                 </Stack>
                 <br/>
                 <PrimaryButton text="Add Listing" onClick={this.writeUserData} style={{marginLeft: "45%"}} allowDisabledFocus/>

                 <div className="separator"/>
             </>
         );
        }
        else
        {
            console.log(this.state.listings[0])
            console.log(this.state.listings.length)
            return (
                <>
                    <div style={{position: 'relative'}}>
                        <div style={{textAlign: 'center', paddingLeft: '10%', bottom: '35%', paddingRight: '10%'}}>
                            <section id={"listings"}>
                                <h1 style={{
                                    fontSize: '6vh',
                                    fontFamily: 'Newslab, georgia, Bakersville',
                                    color: '#000000'
                                }}>Available Listings</h1>
                            </section>
                        </div>
                    </div>
                    <p>The name is {this.state.listings[0][1]}</p>
                    <div className="separator"/>

                    <div style={{position: 'relative'}}>
                        <div style={{textAlign: 'center', paddingLeft: '10%', bottom: '35%', paddingRight: '10%'}}>
                            <section id={"addListing"}>
                                <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Add
                                    a Listing</h1>
                            </section>
                        </div>
                    </div>
                    <Stack {...columnProps}>
                        <TextField label="Name " required id={"nameBox"} onGetErrorMessage={value => {
                            if (value === '') {
                                return 'This field is required';
                            }
                        }}/>
                        <TextField label="Listing Address" required id={"addressBox"} onGetErrorMessage={value => {
                            if (value === '') {
                                return 'This field is required';
                            }
                        }}/>
                        <TextField label="Contact Email" required mask="m\ask: @macalester.edu" id={"emailBox"}
                                   onGetErrorMessage={value => {
                                       if (value === '') {
                                           return 'This field is required';
                                       }
                                   }}/>
                        <TextField label="Rent" required id={"rentBox"} onGetErrorMessage={value => {
                            if (value === '') {
                                return 'This field is required';
                            }
                        }}/>
                    </Stack>
                    <br/>
                    <PrimaryButton text="Add Listing" onClick={this.writeUserData} style={{marginLeft: "45%"}} allowDisabledFocus/>
                    <div className="separator"/>
                </>
            );
        }
    }
}

export default AddListings;