import '../../CSS/index.css'
import * as React from "react";
import SingleList from "./SingleListingDisplay";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import {TextField} from "@fluentui/react";
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { getStorage, ref as reff, uploadBytes } from "firebase/storage";
import {DropzoneDialog} from 'material-ui-dropzone'

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
const storage = getStorage();
const storageRef = reff(storage, 'some-child');

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

// const scrollablePaneStyles: Partial<IScrollablePaneStyles> = { root: classNames.pane };
//
// const createContentArea = (item: IScrollablePaneExampleItem) => (
//     <div >
//         <div className={classNames.textContent}>
//             <SingleList address={item.address} name={item.name} rent={item.rent} email={item.email}/>
//         </div>
//     </div>
// );

// **************************************   This is where the class starts   *******************************************
class AddListings extends React.Component
{
    constructor() {
        super();
        this.state=
        {
            listings: [],
            able: false,
            listAddresses: [],
            files: [],
            open: false
        }
    }

    componentDidMount() {
        this.readUserData()
    }


    readUserData = () =>
    {

        const listRef = ref(database, 'items');
        let tempListings = []
        let tempAddresses = []
        onValue(listRef, (snapshot) => {
            snapshot.forEach(function(childSnapshot)
            {
                tempListings.push(childSnapshot.val())
                tempAddresses.push(childSnapshot.val().address)
            })
        });
        this.setState(prevState => ({
            listings: [...prevState.listings, tempListings]
        }))
        this.setState(prevState => ({
            listAddresses: [...prevState.listAddresses, tempAddresses]
        }))
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

    writeUserData = () => {
        if (!(document.getElementById("addressBox").value === "") && !(document.getElementById("nameBox").value === "") &&
            !(document.getElementById("rentBox").value === "") && !(document.getElementById("emailBox").value === ""))
        {
            if(this.state.listAddresses[0].includes(document.getElementById("addressBox").value))
            {
                alert("This listing already exists");
            }
            else
            {
                uploadBytes(storageRef, this.state.files[0]).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                });
                set(ref(database, 'items/' + document.getElementById("descriptionBox").value), {
                    description: document.getElementById("descriptionBox").value,
                    name: document.getElementById("nameBox").value,
                    email: document.getElementById("emailBox").value + "@macalester.edu",
                    address: document.getElementById("addressBox").value,
                    rent: document.getElementById("rentBox").value,
                    photo: uploadBytes(storageRef, this.state.files[0])
                });
                alert("Success! Please refresh page to see changes!")
            }
        }
    }

    enable = () =>
    {
        // this.readUserData();
        this.setState(prevState => ({able: !prevState.able}));
    }

    render()
    {
        console.log(this.state.files)
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
                         <TextField label="Short Description/Name of Listing" multiline autoAdjustHeight required id={"descriptionBox"} onGetErrorMessage={value => {
                             if (value === "") {
                                 return 'This field is required';
                             }
                         }}/>
                         <TextField label="Name " required id={"nameBox"} onGetErrorMessage={value => {
                             if (value === "") {
                                 return 'This field is required';
                             }
                         }}/>
                         <TextField label="Listing Address" required id={"addressBox"} onGetErrorMessage={value => {
                             if (value==="") {
                                 return 'This field is required';
                             }
                         }}/>
                         <TextField label="Contact Email" required mask="m\ask: @macalester.edu" id={"emailBox"} suffix="@macalester.edu"
                                    onGetErrorMessage={value => {
                                        if (value==="") {
                                            return 'This field is required';
                                        }
                                    }}/>
                         <TextField label="Rent" required id={"rentBox"} onGetErrorMessage={value => {
                             if (value==="") {
                                 return 'This field is required';
                             }
                         }}/>
                     </Stack>
                     <br/>
                     <div style={{display: "flex"}}>
                     <div style={{marginLeft: '40%'}}>
                         <PrimaryButton onClick={this.handleOpen.bind(this)}>
                             Add Image
                         </PrimaryButton>
                         <DropzoneDialog
                             open={this.state.open}
                             onSave={this.handleSave.bind(this)}
                             acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                             showPreviews={true}
                             maxFileSize={5000000}
                             onClose={this.handleClose.bind(this)}
                         />
                     </div>


                     <br/>
                     <PrimaryButton text="Add Listing" onClick={this.writeUserData} style={{marginLeft: "5%", backgroundColor: 'green'}} allowDisabledFocus/>
                     </div>
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
                            {/*<div >*/}
                            {/*    /!*<ScrollablePane scrollContainerFocus={true} scrollContainerAriaLabel="Sticky component example"  styles={scrollablePaneStyles} scrollbarVisibility={ScrollbarVisibility}>*!/*/}
                            {/*    /!*    {this.state.listings[0].map(createContentArea)}*!/*/}
                            {/*    /!*</ScrollablePane>*!/*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <ul>
                        {this.state.listings[0].map((data) => (
                            <li key={data.address}>
                                <SingleList description={data.description} name={data.name} address={data.address} email={data.email} rent={data.rent} image={data.photo}/>
                            </li>
                            ))}
                    </ul>
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
                        <TextField label="Short Description/Name of Listing" multiline autoAdjustHeight required id={"descriptionBox"} onGetErrorMessage={value => {
                            if (value === "") {
                                return 'This field is required';
                            }
                        }}/>
                        <TextField label="Name " required id={"nameBox"} onGetErrorMessage={value => {
                            if (value==="") {
                                return 'This field is required';
                            }
                        }} />
                        <TextField label="Listing Address" required id={"addressBox"} onGetErrorMessage={value => {
                            if (value==="") {
                                return 'This field is required';
                            }
                        }}/>
                        <TextField label="Contact Email" required mask="m\ask: @macalester.edu" id={"emailBox"} suffix="@macalester.edu"
                                   onGetErrorMessage={value => {
                                       if (value==="") {
                                           return 'This field is required';
                                       }
                                   }}/>
                        <TextField label="Rent" required id={"rentBox"} onGetErrorMessage={value => {
                            if (value==="") {
                                return 'This field is required';
                            }
                        }}/>
                    </Stack>
                    <br/>
                    <div style={{display: 'flex'}}>
                    <div style={{marginLeft: '40%'}}>
                        <PrimaryButton onClick={this.handleOpen.bind(this)}>
                            Add Image
                        </PrimaryButton>
                        <DropzoneDialog
                            open={this.state.open}
                            onSave={this.handleSave.bind(this)}
                            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                            showPreviews={true}
                            maxFileSize={5000000}
                            onClose={this.handleClose.bind(this)}
                        />
                    </div>
                    <br/>
                    <PrimaryButton text="Add Listing" onClick={this.writeUserData} style={{marginLeft: "5%", backgroundColor: 'green'}} allowDisabledFocus/>
                    </div>
                    <div className="separator"/>
                </>
            );
        }
    }
}

export default AddListings;