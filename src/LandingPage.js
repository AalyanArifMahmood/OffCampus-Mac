import * as React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import App from './App';

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signIn = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem('userNow', JSON.stringify([user]));
            window.location.reload(); // Reload to update state
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData ? error.customData.email : "N/A";
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error("Error during sign-in popup:", errorCode, errorMessage, email, credential);
        });
}

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            userNow: JSON.parse(localStorage.getItem('userNow')) || [],
            correct: true
        }
    }

    render() {
        const { userNow } = this.state;

        if (userNow.length === 0) {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ marginTop: '8%', fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville' }}>OffCampus@Mac</h1>
                    <h2 style={{ fontSize: '4vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Please Proceed Below</h2>
                    <PrimaryButton text="Login" onClick={signIn} allowDisabledFocus />
                </div>
            );
        } else {
            const userEmail = userNow[0].email;
            if (userEmail.slice(userEmail.length - 15) === "@macalester.edu") {
                return (
                    <App userNow={userNow} />
                );
            } else {
                return (
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: '8%', fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Sorry, the page is unavailable with your current account</h1>
                        <h1 style={{ marginTop: '8%', fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville' }}>Try Logging in with a <b>valid</b> Macalester Email</h1>
                    </div>
                );
            }
        }
    }
}

export default LandingPage;
