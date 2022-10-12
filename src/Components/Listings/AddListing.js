import '../../CSS/index.css'
import * as React from "react";
import SingleList from "./SingleListingDisplay";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {TextField} from "@fluentui/react";
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { ScrollablePane, IScrollablePaneStyles } from '@fluentui/react/lib/ScrollablePane';
import {getTheme, mergeStyleSets} from "@fluentui/react/lib/Styling";

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


export interface IScrollablePaneExampleItem {
    address: string;
    name: string;
    rent: number;
    email: string;
}
const theme = getTheme();
const classNames = mergeStyleSets({
    wrapper: {
        height: '40vh',
        position: 'relative',
        maxHeight: 'inherit',
    },
    pane: {
        maxWidth: 400,
        border: '1px solid ' + theme.palette.neutralLight
    },
    textContent: {
        padding: '15px 10px',
    },
});

const scrollablePaneStyles: Partial<IScrollablePaneStyles> = { root: classNames.pane };

const createContentArea = (item: IScrollablePaneExampleItem) => (
    <div >
        <div className={classNames.textContent} style={{backgroundColor: 'gray'}}>
            <SingleList address={item.address} name={item.name} rent={item.rent} email={item.email}/>
        </div>
    </div>
);


// **************************************   This is where the class starts   *******************************************
class AddListings extends React.Component
{
    constructor() {
        super();
        this.state=
        {
            listings: [],
            able: false
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
                tempListings.push(childSnapshot.val())
            })
        });
        this.setState(prevState => ({
            listings: [...prevState.listings, tempListings]
        }))
    }

    writeUserData = () => {
        if (!(document.getElementById("addressBox").value === "") && !(document.getElementById("nameBox").value === "") &&
            !(document.getElementById("rentBox").value === "") && !(document.getElementById("emailBox").value === ""))
        {
            set(ref(database, 'items/' + document.getElementById("addressBox").value), {
                name: document.getElementById("nameBox").value,
                email: document.getElementById("emailBox").value,
                address: document.getElementById("addressBox").value,
                rent: document.getElementById("rentBox").value
            });
            alert("Success! Please refresh page to see changes!")
        }
    }

    enable = () =>
    {
        this.readUserData();
        this.setState(prevState => ({able: !prevState.able}));
    }

    render()
    {
        if(!this.state.able)
        {
            // *********************************************   BEFORE RE RENDER   **************************************
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
                             <PrimaryButton text="Show Listings" onClick={this.enable} allowDisabledFocus/>
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
            // *************************************   AFTER RE RENDER  ************************************************
        }
        else
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
                            <PrimaryButton text="Hide Listings" onClick={this.enable}  allowDisabledFocus/>
                            <div >
                                {/*<ScrollablePane scrollContainerFocus={true} scrollContainerAriaLabel="Sticky component example" styles={scrollablePaneStyles}>*/}
                                {/*    {this.state.listings.map(createContentArea)}*/}
                                {/*</ScrollablePane>*/}
                            </div>
                        </div>
                    </div>
                    <ul>
                        {this.state.listings[0].map((data) => (
                            <li key={data.address}>
                                <SingleList name={data.name} address={data.address} email={data.email} rent={data.rent}/>
                            </li>
                            ))}
                    </ul>
                    {/*<SingleList name={this.state.listings[0][1].name} rent={this.state.listings[0][0].rent} email={this.state.listings[0][0].email} address={this.state.listings[0][0].address}/>*/}
                    {/*<SingleList name={this.state.listings[0][1].name} rent={this.state.listings[0][1].rent} email={this.state.listings[0][1].email} address={this.state.listings[0][1].address}/>*/}
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