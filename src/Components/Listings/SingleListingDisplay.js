import React from 'react'
import Box from '@material-ui/core/Box';
import {IStackProps, Stack} from '@fluentui/react/lib/Stack';
import { PrimaryButton, IconButton } from '@fluentui/react/lib/Button';
import {   Modal, IDragOptions, getTheme, mergeStyleSets, FontWeights,} from '@fluentui/react';
import {IButtonStyles} from "@fluentui/react";
import {IIconProps} from "@fluentui/react";

const columnProps: Partial<IStackProps> = {
    styles: { root: { maxWidth: "53vh" } },
};


const cancelIcon: IIconProps = { iconName: 'Cancel' };

const theme = getTheme();
const contentStyles = mergeStyleSets({
    container: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'stretch',
    },
    header: [
        theme.fonts.xLargePlus,
        {
            flex: '1 1 auto',
            borderTop: `4px solid ${theme.palette.themePrimary}`,
            color: theme.palette.neutralPrimary,
            display: 'flex',

            alignItems: 'center',
            fontWeight: FontWeights.semibold,
            padding: '12px 12px 14px 24px',
        },
    ],
    body: {
        flex: '4 4 auto',
        padding: '0 24px 24px 24px',
        overflowY: 'hidden',
        display: "flex",
        justifyContent: "space-between",
        selectors: {
            p: { margin: '14px 0' },
            'p:first-child': { marginTop: 0 },
            'p:last-child': { marginBottom: 0 },
        },
    },
});

const iconButtonStyles: Partial<IButtonStyles> = {
    root: {
        color: theme.palette.neutralPrimary,
        marginLeft: 'auto',
        marginTop: '4px',
        marginRight: '2px',
    },
    rootHovered: {
        color: theme.palette.neutralDark,
    },
};



class SingleList extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                extend: false
            }

    }

    setToTrue = () =>
    {
        this.setState(prevState => ({extend: !prevState.extend}));
    }

    render()
    {
        return (
            <>
                <Box bgcolor="white" p={1} border={2} marginRight={10} marginLeft={10}>
                    <b style={{textAlign: "center", fontSize: '150%', marginLeft: "5%"}}>{this.props.description}</b>
                    
                    <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>
                    <b style={{textAlign: "left", fontSize: '120%', marginLeft: "5%", color: "grey"}}>{this.props.address}</b>
                    </div>

                    <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>
                    <b style={{textAlign: "left", fontSize: '120%', marginLeft: "5%", color: "grey"}}>{this.props.name}</b>
                    </div>

                    <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>
                        <b style={{textAlign: "left", fontSize: '120%', marginLeft: "5%", color: "grey"}}>{this.props.email}</b>
                    </div>

                    <div style={{justifyContent: "space-between", display: "flex", fontSize: '2vh'}}>

                    <Box bgcolor="white" p={1} border={2} marginRight={0} marginLeft={10} marginBottom = {10} marginTop = {5} color = "#3792cd" style={{textAlign: "center", maxHeight: "7vh", borderRadius: "30%"}}>
                        <b style={{color:"black", fontSize: "120%"}}>Rent</b>
                        <br/>
                    <b style={{textAlign: "left", fontSize: '120%', marginLeft: "5%", color: "black"}}>{"$"}{this.props.rent}</b>
                    </Box>

                    <Box bgcolor="white" p={1} border={2} marginRight={0} marginLeft={5} marginBottom = {10} marginTop = {5} color = "#3792cd" style={{textAlign: "center", maxHeight: "7vh", borderRadius: "30%"}}>
                        <b style={{color:"black", fontSize: "120%"}}>Rooms</b>
                        <br/>
                        <b style={{fontSize: '120%', marginLeft: "5%", color: "black"}}>{this.props.rooms}</b>
                    </Box>

                    <Box bgcolor="white" p={1} border={2} marginRight={0} marginLeft={5} marginBottom = {10} marginTop = {5} color = "#3792cd" style={{textAlign: "center", maxHeight: "7vh", borderRadius: "30%"}}>
                        <b style={{color:"black", fontSize: "120%"}}>Bathrooms</b>
                        <br/>
                        <b style={{textAlign: "left", fontSize: '120%', marginLeft: "5%", color: "black"}}>{this.props.bathrooms}</b>
                    </Box>

                        {/* <Stack {...columnProps}>
                            <p><b>Address:</b> {this.props.address} </p>
                            <p><b>Contact Name:</b> {this.props.name}</p>
                            <p><b>Contact Information:</b> {this.props.email}  </p>
                            <p><b>Rent:</b> {this.props.rent}  </p>
                            <p><b>Number Of Rooms:</b> {this.props.rooms}  </p>
                            <p><b>Number Of Bathrooms:</b> {this.props.bathrooms}  </p>
                        </Stack> */}
                        <img src={this.props.image} alt="Nothing" style={{width: '24%', height: '19%', boxShadow: '1px 12px 9px #6f6f6f', borderRadius: '6%'}} />
                    </div>
                    <PrimaryButton text="More Info" onClick={this.setToTrue} style={{width: '16vh', marginLeft: "45%"}} allowDisabledFocus/>
                    <Modal
                    isOpen={this.state.extend}
                    onDismiss={this.setToTrue}
                    containerClassName={contentStyles.container}
                    isBlocking={false}
                    dragOptions={true}>

                        <div className={contentStyles.header}>
                            <span>{this.props.description}</span>
                            <IconButton
                                styles={iconButtonStyles}
                                iconProps={cancelIcon}
                                ariaLabel="Close popup modal"
                                onClick={this.setToTrue}
                            />
                        </div>
                        <div className={contentStyles.body}>
                            <Stack {...columnProps}>
                                <p><b>Address:</b> {this.props.address} </p>
                                <p><b>Contact Name:</b> {this.props.name}</p>
                                <p><b>Contact Information:</b> {this.props.email}  </p>
                                <p><b>Rent:</b> {this.props.rent}  </p>
                                <p><b>Number Of Rooms:</b> {this.props.rooms}  </p>
                                <p><b>Number Of Bathrooms:</b> {this.props.bathrooms}  </p>
                            </Stack>
                            <img src={this.props.image} alt="Nothing" style={{width: '30%', height: '25%', boxShadow: '1px 12px 9px #6f6f6f', borderRadius: '6%'}} />
                        </div>
                        <div className={contentStyles.body}>
                            <Stack>
                                <b>Description: </b>
                                <p style={{textAlign: "justify"}}>{this.props.details}</p>
                            </Stack>

                        </div>


                    </Modal>
                </Box>
            </>
        );
    }

}

export default SingleList;