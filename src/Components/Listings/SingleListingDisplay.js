import React from 'react'

class SingleList extends React.Component
{
    render()
    {
        return (
            <>
            <div style={{textAlign: 'center'}}>
                <p><b>Listing Address:</b> {this.props.address} </p>
                <p><b>Lister's Name:</b> {this.props.name}</p>
                <p><b>Lister's Contact:</b> {this.props.email}  </p>
                <p><b>Listing Rent:</b> {this.props.rent}  </p>
            </div>
            <br/>
            </>
        );
    }

}

export default SingleList;