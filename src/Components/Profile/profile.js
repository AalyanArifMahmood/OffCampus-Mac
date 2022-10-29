import '../../CSS/index.css'
import React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,
getAuth,
 signInWithPopup,
signOut}
from "firebase/auth";

import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";


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

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);

// const provider = new GoogleAuthProvider()

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export const Profile = React.FunctionComponent = () =>  {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"profile"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Your Profile</h1>
                    </section>
                    <br/>
                    <PrimaryButton text="Login" onClick={signInWithGoogle} allowDisabledFocus/>
                </div>
            </div>
            <div className="separator" />
        </>
    );
}

export default Profile;