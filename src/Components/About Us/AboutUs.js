import '../../CSS/index.css'
import image from "../MainPage/Background1.jpeg";


function AboutUs() {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center', paddingLeft: '12%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"aboutus"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#01426A'}}>About the Developers</h1>
                    </section>
                </div>
            </div>
            <img src={image} alt="Nothing" style={{width: '1440px', height: '755px', filter: 'brightness(50%)', boxShadow: '1px 12px 9px #6f6f6f'}}/>
            <div className="separator" />
        </>
    );
}

export default AboutUs;