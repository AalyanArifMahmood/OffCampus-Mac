import '../../CSS/index.css'



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
            <div className="separator" />
        </>
    );
}

export default Listings;