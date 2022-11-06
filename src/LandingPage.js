import * as React from "react";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";
import App from './App';

const auth = getAuth()
const provider = new GoogleAuthProvider();
// const db = getFirestore(app);

const signIn = () =>
{
    signInWithRedirect(auth, provider)
}

class landingPage extends React.Component
{

    constructor() {
        super();
        this.state =
            {
                userNow: [],
                correct: true
            }
    }
    componentDidMount() {
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                this.setState(prevState => ({
                    userNow: [...prevState.userNow, user]
                }))

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    render()
    {
        if(this.state.userNow.length === 0)
        {
            return (
                <>
                    <PrimaryButton text="Login" onClick={signIn} allowDisabledFocus/>

                </>
            );
        }
        else
        {
            if(this.state.userNow[0].email.slice(this.state.userNow[0].email.length - 15) === "@macalester.edu")
            {
                return (
                    <App userNow={this.state.userNow}/>
                );
            }
            else
            {
                return (
                    <h1>Sorry, the page unavailable with your current account</h1>
                );
            }
        }
    }

}

export default landingPage