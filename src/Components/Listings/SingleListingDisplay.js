import React from 'react'
import Box from '@material-ui/core/Box';
import {IStackProps, Stack} from '@fluentui/react/lib/Stack';
import { PrimaryButton } from '@fluentui/react/lib/Button';


const columnProps: Partial<IStackProps> = {
    styles: { root: { maxWidth: "53vh" } },
};

class SingleList extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                extend: true
            }

    }

    setToTrue = () =>
    {
        this.setState(prevState => ({extend: !prevState.extend}));
    }

    render()
    {
        // const img = document.getElementById("listing");
        // img.setAttribute('src', this.props.image);
        if (this.state.extend)
        {
            return (
                <>
                    <Box bgcolor="white" p={1} border={2} marginRight={10} marginLeft={10}>
                        <b style={{textAlign: "center", fontSize: '150%', marginLeft: "25%"}}>{this.props.description}</b>
                        <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>
                            <Stack {...columnProps}>
                                <p><b>Address:</b> {this.props.address} </p>
                                <p><b>Contact Name:</b> {this.props.name}</p>
                                <p><b>Contact Information:</b> {this.props.email}  </p>
                                <p><b>Rent:</b> {this.props.rent}  </p>
                                <p><b>Number Of Rooms:</b> {this.props.rooms}  </p>
                                <p><b>Number Of Bathrooms:</b> {this.props.bathrooms}  </p>
                            </Stack>
                            <img src={this.props.image} alt="Nothing" style={{width: '24%', height: '19%', boxShadow: '1px 12px 9px #6f6f6f', borderRadius: '6%'}} />
                        </div>
                        <PrimaryButton text="Extend" onClick={this.setToTrue} style={{width: '16vh', marginLeft: "45%"}} allowDisabledFocus/>
                    </Box>
                </>
            );
        }
        else
        {
            return (
                <>
                    <Box bgcolor="white" p={1} border={2} marginRight={10} marginLeft={10}>
                        <b style={{textAlign: "center", fontSize: '150%', marginLeft: "25%"}}>{this.props.description}</b>
                        <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>
                            <Stack {...columnProps}>
                                <p><b>Address:</b> {this.props.address} </p>
                                <p><b>Contact Name:</b> {this.props.name}</p>
                                <p><b>Contact Information:</b> {this.props.email}  </p>
                                <p><b>Rent:</b> {this.props.rent}  </p>
                                <p><b>Number Of Rooms:</b> {this.props.rooms}  </p>
                                <p><b>Number Of Bathrooms:</b> {this.props.bathrooms}  </p>
                                <b>Description: </b>
                                <p style={{textAlign: "justify"}}>{this.props.details}</p>
                            </Stack>
                            <img src={this.props.image} alt="Nothing" style={{width: '24%', height: '19%', boxShadow: '1px 12px 9px #6f6f6f', borderRadius: '6%'}} />
                        </div>
                        <PrimaryButton text="Retract" onClick={this.setToTrue} style={{width: '16vh', marginLeft: "45%"}} allowDisabledFocus/>
                    </Box>
                </>
            );
        }
    }

}

export default SingleList;