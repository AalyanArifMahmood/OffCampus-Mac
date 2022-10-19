import React from 'react'
import Box from '@material-ui/core/Box';
import {IStackProps, Stack} from '@fluentui/react/lib/Stack';
import { PrimaryButton } from '@fluentui/react/lib/Button';


const columnProps: Partial<IStackProps> = {
    styles: { root: { maxWidth: "46vh" } },
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
                                <p><b>Listing Address:</b> {this.props.address} </p>
                                <p><b>Lister's Name:</b> {this.props.name}</p>
                                <p><b>Lister's Contact:</b> {this.props.email}  </p>
                                <p><b>Listing Rent:</b> {this.props.rent}  </p>
                            </Stack>
                            <img src={this.props.image} alt="Nothing" style={{width: '20%', height: '15%'}}/>
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
                                <p><b>Listing Address:</b> {this.props.address} </p>
                                <p><b>Lister's Name:</b> {this.props.name}</p>
                                <p><b>Lister's Contact:</b> {this.props.email}  </p>
                                <p><b>Listing Rent:</b> {this.props.rent}  </p>
                                <b>Description: </b>
                                <p style={{textAlign: "justify"}}>{this.props.details}</p>
                            </Stack>
                            <img src={this.props.image} alt="Nothing" style={{width: '20%', height: '15%'}}/>
                        </div>
                        <PrimaryButton text="Retract" onClick={this.setToTrue} style={{width: '16vh', marginLeft: "45%"}} allowDisabledFocus/>
                    </Box>
                </>
            );
        }
    }

}

export default SingleList;