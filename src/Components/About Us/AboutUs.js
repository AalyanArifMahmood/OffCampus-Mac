import '../../CSS/index.css'
import React from "react";


export const AboutUs = React.FunctionComponent = props => {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"aboutus"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#01426A'}}>About the Developers</h1>
                    </section>
                </div>
            </div>
            <div className="separator" />
        </>
    );
}

export default AboutUs;