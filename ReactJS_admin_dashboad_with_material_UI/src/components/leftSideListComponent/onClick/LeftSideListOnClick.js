import React from 'react';
import { Grid, List, ListItem, ListItemText, LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { changeIconDisplay } from "../../../App";
import '../../../assets/css/leftSideListOnClick.css'

function handleClick() {
    changeIconDisplay()
}

export default function LeftSideListOnClick() {

    const netflixImage = require('../../../assets/images/netflix.png')
    const twitterImage = require('../../../assets/images/twitter.png')
    const googleImage = require('../../../assets/images/google.png')
    const apImage = require('../../../assets/images/ap.png')
    const icon1Image = require('../../../assets/images/icon1.png')
    const backImage = require('../../../assets/images/back.png')

    return (

        <div className="main-bg MR100">
            <Grid container>
                <Grid className="" item sm={1} xs={12}>
                    <Typography className="text-center">
                        <h3><img src={backImage} onClick={handleClick} alt=""></img></h3>
                    </Typography>
                </Grid>
                <Grid className="" item sm={8} xs={12}>
                    <Typography className="text-left">
                        <h3> Bayer to sell Dr Scholl to private equity in bid to focus on core</h3>
                    </Typography>
                </Grid>
                <Grid className="" item sm={3} xs={12}>

                    <Typography className="text-right" style={{ padding: '10px', color: 'grey' }}>
                        <h5> <img src={icon1Image} alt=""></img>&nbsp; <span>Financial Time</span></h5>
                    </Typography>
                </Grid>
                <Grid className="PD16" item sm={4} xs={12} >
                    <Grid className="sidebar-details">
                        <List>
                            <ListItem className="bottom-border" alignItems="flex-start">
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography className="all-praghrph" variant="title">
                                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <ListItem className="bottom-border" alignItems="flex-start">
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography className="all-praghrph" variant="title">
                                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <ListItem className="bottom-border" alignItems="flex-start">
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography className="all-praghrph" variant="title">
                                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <ListItem className="bottom-border" alignItems="flex-start">
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography className="all-praghrph" variant="title">
                                                <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid className="placeholder Company-new-details">

                        <h4 style={{ marginBottom: '0', color: 'black', textAlign: 'left', padding: '20px 20px 20px 45px', fontWeight: 'bold' }}>Companies</h4>

                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={netflixImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 25 000 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress" >
                            <LinearProgress variant="determinate" value='70' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={twitterImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 20 342 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='50' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={googleImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 18 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={apImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 15 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='40' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>

                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={netflixImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 25 000 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress" >
                            <LinearProgress variant="determinate" value='70' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={twitterImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 20 342 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='50' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={googleImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 18 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={apImage} alt=""/> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 15 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='40' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>


                    </Grid>
                </Grid>
                <Grid className="PD16" item sm={4} xs={12} >
                    <Typography class="all-praghrph" variant="title">

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                        <p> &nbsp; </p>

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                        <p> &nbsp; </p>

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                    </Typography>
                </Grid>
                <Grid className="PD16" item sm={4} xs={12} >
                    <Typography class="all-praghrph" variant="title">

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                        <p> &nbsp; </p>

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                        <p> &nbsp; </p>

                        <p>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software anshul!  Aldus PageMaker including versions of Lorem Ipsum</p>

                    </Typography>
                </Grid>
            </Grid>
        </div>
        // </div>
    );
}
