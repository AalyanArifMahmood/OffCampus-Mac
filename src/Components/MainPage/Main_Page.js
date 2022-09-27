import image from './Background1.jpeg'
import '../../CSS/index.css'
import React from 'react';

function Info() {
    return (
        <>
            <div >
                <section id={"home"}>
                <img src={image} alt="Nothing" style={{width: '1440px', height: '755px', filter: 'brightness(50%)', boxShadow: '1px 12px 9px #6f6f6f'}}/>
                    <div style={{textAlign: 'center', position: 'absolute', paddingLeft: '12%',bottom: '35%',paddingRight: '10%', color: 'white'}}>
                        <h1 style={{fontSize: '9vh', fontFamily: 'Newslab, georgia, Bakersville'}}>Find Listings Around Macalester College</h1>
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