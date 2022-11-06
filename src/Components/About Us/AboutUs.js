import '../../CSS/index.css'
import React from "react";
import image from './aalyan.jpg'
import image2 from './salman.jpg'
import image3 from './aliya.jpg'
import image4 from './haris.jpg'

class AboutUs extends React.Component
{
    render()
    {
        if (this.props.implement)
        {
            return (
                <>
                    <section id={"aboutus"} style={{textAlign: 'center'}}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>The Developers</h1>
                    </section>

                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <section id={"aalyan"} style={{textAlign: "center"}}>
                            <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Aalyan Mahmood</h1>
                            <img src={image} alt="aalyan" style={{marginLeft: '12%', borderRadius: '100%', width: '150px', height: '150px'}}/>
                            <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Developer </h1>
                        </section>

                        <section id={"salman"} style={{textAlign: "center"}}>
                            <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000'}}>Salman Ijaz</h1>
                            <img src={image2} alt="salman" style={{borderRadius: '100%', width: '150px', height: '150px'}}/>
                            <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Developer </h1>
                        </section>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
                        <section id={"aliya"} style={{textAlign: "center"}}>
                            <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000', marginRight: '-45%'}}>Aliya Nadeeva</h1>
                            <img src={image3} alt="aliya" style={{marginLeft: '33%', borderRadius: '100%', width: '150px', height: '150px'}}/>
                            <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080', marginLeft: '50%'}}>UX/UI </h1>
                        </section>


                        <section id={"haris"} style={{textAlign: "center", marginLeft: '5%'}}>
                            <h1 style={{fontSize: '3vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#000000', marginRight: '-5%'}}>Haris Ahmed</h1>
                            <img src={image4} alt="haris" style={{marginLeft: '4%', borderRadius: '100%', width: '150px', height: '150px'}}/>
                            <h1 style={{fontSize: '2vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#808080'}}>Project Manager </h1>
                        </section>
                    </div>
                    <div className="separator" />
                </>
            );
        }
        else
        {
            return (
                <>

                </>
            );
        }
    }

}

export default AboutUs;