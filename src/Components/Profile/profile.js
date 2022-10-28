import '../../CSS/index.css'
import React from "react";
// import {getAuth, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
//
// const auth = getAuth()
// const provider = new GoogleAuthProvider()

export const Profile = React.FunctionComponent = () =>  {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"profile"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Your Profile</h1>
                    </section>

                </div>
            </div>
            <div className="separator" />
        </>
    );
}

export default Profile;