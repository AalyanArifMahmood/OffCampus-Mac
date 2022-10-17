import React from 'react'
import Box from '@material-ui/core/Box';
import image from "../MainPage/Background1.jpeg";
import { Stack} from '@fluentui/react/lib/Stack';

class SingleList extends React.Component
{
    render()
    {
        return (
            <>
                <Box bgcolor="white" p={1} border={2} marginRight={10} marginLeft={10}>
                    <div style={{justifyContent: "space-between", display: "flex"}}>
                        <Stack>
                            <b style={{textAlign: "center", marginLeft: '70%', fontSize: '150%', marginRight: '-70%'}}>{this.props.description}</b>
                            <p><b>Listing Address:</b> {this.props.address} </p>
                            <p><b>Lister's Name:</b> {this.props.name}</p>
                            <p><b>Lister's Contact:</b> {this.props.email}  </p>
                            <p><b>Listing Rent:</b> {this.props.rent}  </p>
                        </Stack>
                        <img src={image} alt="Nothing" style={{width: '38vh', height: '25vh'}}/>
                    </div>
                </Box>
            </>
        );
    }

}

export default SingleList;