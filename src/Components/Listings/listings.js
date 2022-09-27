import '../../CSS/index.css'
import image from "../MainPage/Background1.jpeg";



function Listings() {
    return (
        <>
            <div style={{position: 'relative'}}>
                <div style={{textAlign: 'center',  paddingLeft: '10%',bottom: '35%',paddingRight: '10%'}}>
                    <section id={"listings"}>
                        <h1 style={{fontSize: '6vh', fontFamily: 'Newslab, georgia, Bakersville', color: '#01426A'}}>Available Listings</h1>
                    </section>
                </div>
            </div>
            <img src={image} alt="Nothing" style={{width: '1440px', height: '755px', filter: 'brightness(50%)', boxShadow: '1px 12px 9px #6f6f6f'}}/>
            <div className="separator" />
        </>
    );
}

export default Listings;