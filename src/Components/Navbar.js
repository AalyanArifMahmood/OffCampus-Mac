import React from 'react';

class NavBar extends React.Component
{
    render()
    {
        return (
            <div style={{width: '100%' ,backgroundColor: 'blue', top: '0px', position: 'absolute'}}>
                <h3 style={{color: 'white', textAlign: 'center'}}>Find apartments to Sublet!</h3>
            </div>
        );
    }
}

export default NavBar


