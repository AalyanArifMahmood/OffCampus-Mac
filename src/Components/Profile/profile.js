import '../../CSS/index.css'
import React from "react";


export const Profile = React.FunctionComponent = props =>  {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"profile"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#01426A'}}>Your Profile</h1>
                    </section>

                </div>
            </div>
            <div className="separator" />
        </>
    );
}

export default Profile;