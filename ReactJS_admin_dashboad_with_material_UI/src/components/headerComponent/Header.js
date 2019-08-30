import React, { Component } from 'react';
import { Container, Grid, Typography, InputBase, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import MenuListComposition1, { MenuListComposition2, MenuListComposition3, MenuListComposition4, ProfileMenu } from './menuList/MenuListComposition'

const searchImage = require('../../assets/images/searchIcon.png');

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 6,
        position: 'relative',
        padding: '10px 32px',
        backgroundColor: "#1f2327",
        backgroundImage: `url(${searchImage})`,
        backgroundSize: '14px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px',
        fontSize: 12,
        width: '100%',
        color: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Helvetica Neue',
            'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);
export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
             <div>
            <Container maxWidth="xl" className="fixed-nav">
                <Grid container spacing={0}>
                    <Grid item md={4} sm={4}>

                        <Grid container spacing={0}>
                            <Grid item sm={4} md={4} style={{ padding: '10px' }} >
                                <Typography style={{ padding: '0px'}} id ='projectName' className="navbar-brand" variant="title">Project name</Typography>
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </Grid>
                            <Grid item sm={8} md={8}>
                                <form id='myform'>
                                    <BootstrapInput placeholder="Type to search..." id="bootstrap-input" />
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} sm={8}>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li  >
                                    <MenuListComposition1 content={this.props.content}/>
                                </li>
                                <li >
                                    <MenuListComposition2 content={this.props.app} />
                                </li>
                                <li >
                                    <MenuListComposition3 />
                                </li>
                                <li >
                                    <MenuListComposition4 />
                                </li>
                            </ul>

                            <div className="navbar-right">
                                <ProfileMenu />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        );
    }

}
       
