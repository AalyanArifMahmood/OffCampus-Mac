import image from './Background1.jpeg'
import '../../CSS/index.css'
import React from 'react';
import '../../CSS/Fading.css'
import image2 from "../../Resources/MacLogo.png";

export const Info = React.FunctionComponent = props => {
    return (
        <>
            <div>
                <section id={"home"}>
                <img src={image} alt="Nothing" style={{width: '100%', height: '100%', filter: 'brightness(40%)', boxShadow: '1px 12px 9px #6f6f6f'}}/>
                    <div style={{display: 'flex', textAlign: 'center', position: 'absolute', paddingLeft: '12%',bottom: '21%', paddingRight: '10%', color: 'white'}} class={"fade-in-text"}>
                        <img src={image2} alt="Nothing" style={{height: '30%', width: '30%'}}/>
                        <h1 style={{marginTop: '8%', fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville'}}>Find Listings Around Macalester College</h1>
                    </div>
                </section>
            </div>
            <div className="separator" />
            {/*<div style={{position: "relative"}}>*/}
            {/*<img src={image} style={{width: '1440px', height: '750px'}} alt={"Nothing"}/>*/}
            {/*<section id="home">*/}
            {/*    <h1 style={{fontStyle: 'montserrat', textAlign: 'center', marginTop: '5%', position: 'absolute'}}>Find Listings Around Macalester College</h1>*/}
            {/*</section>*/}
            {/*</div>*/}
        </>
    );
}

export default Info;