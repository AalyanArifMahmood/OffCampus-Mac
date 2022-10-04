import '../../CSS/index.css'
import React from "react";
import image from './aalyan.jpg'
import image2 from './salman.jpg'
import image3 from './aliya.jpg'
import image4 from './haris.jpg'


export const AboutUs = React.FunctionComponent = props => {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"aboutus"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>About the Developers</h1>
                    </section>
                </div>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '55%',paddingRight: '10%'}}>
                    <section id={"aalyan"}>
                        <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Aalyan Mahmoud</h1>
                        <img src={image} alt="aalyan" width="150" height="150"></img>
                        <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Developer </h1>
                    </section>
                </div>

                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '55%',paddingRight: '10%'}}>
                    <section id={"salman"}>
                    <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Salman Ijaz</h1>
                    <img src={image2} alt="salman" width="150" height="150"></img>
                        <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Developer </h1>
                    </section>
                </div>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '55%',paddingRight: '10%'}}>
                    <section id={"aliya"}>
                    <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Aliya Nadeeva</h1>
                    <img src={image3} alt="aliya" width="150" height="170"></img>
                        <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>UX/UI </h1>
                    </section>
                </div>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '55%',paddingRight: '10%'}}>
                    <section id={"haris"}>
                    <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Haris Ahmed</h1>
                    <img src={image4} alt="haris" width="150" height="150"></img>
                        <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Project Manager </h1>
                    </section>
                </div>
            </div>
            
            <div className="separator" />
        </>
    );
}

export default AboutUs;