import React, { Component } from "react";
import { List, ListItem, ListItemText, Grid, Button } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { changeDisplay } from "../../App";

const icon1Image = require('../../assets/images/icon1.png')

export default class LeftSideList extends Component {
    handleClick(event) {
        // var current = document.getElementsByClassName("active-item");
        // current[0].className = current[0].className.replace(" active-item", "");
        // event.target.className += " active-item";
        changeDisplay()
    }
    render() {
        return (
            <div className="col-sm-4 col-md-4 sidebar">

                <p style={{ padding: '0px 25px', color: '#8d8f91' }}> 48 000 results on the Surface and Deep web </p>

                <div className="news-section">
                    <List>
                        <ListItem alignItems="flex-start" className='active-item' onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
        </Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
        </div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
        </Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}><CircularProgress variant="static" value={70} style={{ color: '#FFF' }} size={24} /><span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}> 70%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none'}}>
                                                Patent
        </Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
        </div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
        </Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={60} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>60%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>


                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Academic
        </Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
        </div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
        </Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={30} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>30%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
        </Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
        </div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
        </Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={50} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>50%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" onClick={this.handleClick} style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Government
        </Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
        </div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
        </Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={90} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>90%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}><CircularProgress variant="static" value={70} style={{ color: '#FFF' }} size={24} /><span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}> 70%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none'}}>
                                                Patent
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={60} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>60%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>


                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Academic
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={30} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>30%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={50} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>50%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" onClick={this.handleClick} style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Government
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={90} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>90%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />

                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}><CircularProgress variant="static" value={70} style={{ color: '#FFF' }} size={24} /><span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}> 70%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none'}}>
                                                Patent
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={60} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>60%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>


                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Academic
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={30} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>30%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={50} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>50%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" onClick={this.handleClick} style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Government
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={90} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>90%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />

                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}><CircularProgress variant="static" value={70} style={{ color: '#FFF' }} size={24} /><span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}> 70%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none'}}>
                                                Patent
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={60} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>60%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>


                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Academic
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={30} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>30%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start" onClick={this.handleClick}>

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                News
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={50} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>50%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                secondary={
                                    <React.Fragment>

                                        <Typography>
                                            <Button variant="contained" onClick={this.handleClick} style={{ background: '#33363a', color: '#fff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', boxShadow: 'none' }}>
                                                Government
</Button>
                                            <div style={{ float: 'right', color: 'grey', fontSize: '14px' }} variant="contained">
                                                <img src={icon1Image} alt=""></img> &nbsp; Financial Times
</div>
                                        </Typography>
                                        <Typography>
                                            &nbsp;
</Typography>
                                        <Grid container spacing={0}>
                                            <Grid item md={9} sm={9} >

                                                <Typography style={{ color: '#FFF' }} variant="title">
                                                    <h5> Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h5>
                                                </Typography>
                                            </Grid>
                                            <Grid item md={3} sm={3} >
                                                <Typography style={{ color: '#FFF', float: 'right' }}> <CircularProgress variant="static" value={90} style={{ color: '#FFF' }} size={24} /> <span style={{ padding: '0 10', position: 'relative', top: -6, fontSize: '14px', fontWeight: 'bold' }}>90%</span> </Typography>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider />

                    </List>
                </div>

                <div className="news-section">

                </div>


                <div className="news-section" style={{ marginTop: '10px' }}>

                    <div className="news-section-inner">

                        <div className="timeline-item">
                            <div className="animated-background">
                                <div className="background-masker header-top"></div>
                                <div className="background-masker header-left" style={{ width: '270px' }}></div>
                                <div className="background-masker header-right" style={{ width: '95px' }}></div>
                                <div className="background-masker header-bottom" style={{ height: '12px' }}></div>
                                <div className="background-masker subheader-left"></div>
                                <div className="background-masker subheader-right"></div>
                                <div className="background-masker subheader-bottom"></div>
                                <div className="background-masker content-top"></div>
                                <div className="background-masker content-first-end" style={{ right: '35px' }}></div>
                                <div className="background-masker content-second-line"></div>
                                <div className="background-masker content-second-end" ></div>
                                <div className="background-masker content-third-line"></div>
                                <div className="background-masker content-third-end"></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr />
                    </div>
                </div>

                <div className="news-section" style={{ marginTop: '10px' }}>

                    <div className="news-section-inner">

                        <div className="timeline-item">
                            <div className="animated-background">
                                <div className="background-masker header-top"></div>
                                <div className="background-masker header-left" style={{ width: '270px' }}></div>
                                <div className="background-masker header-right" style={{ width: '95px' }}></div>
                                <div className="background-masker header-bottom" style={{ height: '12px' }}></div>
                                <div className="background-masker subheader-left"></div>
                                <div className="background-masker subheader-right"></div>
                                <div className="background-masker subheader-bottom"></div>
                                <div className="background-masker content-top"></div>
                                <div className="background-masker content-first-end" style={{ right: '35px' }}></div>
                                <div className="background-masker content-second-line"></div>
                                <div className="background-masker content-second-end" ></div>
                                <div className="background-masker content-third-line"></div>
                                <div className="background-masker content-third-end"></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr />
                    </div>
                </div>

                <div className="news-section" style={{ marginTop: '10px' }}>

                    <div className="news-section-inner">

                        <div className="timeline-item">
                            <div className="animated-background">
                                <div className="background-masker header-top"></div>
                                <div className="background-masker header-left" style={{ width: '270px' }}></div>
                                <div className="background-masker header-right" style={{ width: '95px' }}></div>
                                <div className="background-masker header-bottom" style={{ height: '12px' }}></div>
                                <div className="background-masker subheader-left"></div>
                                <div className="background-masker subheader-right"></div>
                                <div className="background-masker subheader-bottom"></div>
                                <div className="background-masker content-top"></div>
                                <div className="background-masker content-first-end" style={{ right: '35px' }}></div>
                                <div className="background-masker content-second-line"></div>
                                <div className="background-masker content-second-end" ></div>
                                <div className="background-masker content-third-line"></div>
                                <div className="background-masker content-third-end"></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr />
                    </div>
                </div>

                <div className="news-section" style={{ marginTop: '10px' }}>

                    <div className="news-section-inner">

                        <div className="timeline-item">
                            <div className="animated-background">
                                <div className="background-masker header-top"></div>
                                <div className="background-masker header-left" style={{ width: '270px' }}></div>
                                <div className="background-masker header-right" style={{ width: '95px' }}></div>
                                <div className="background-masker header-bottom" style={{ height: '12px' }}></div>
                                <div className="background-masker subheader-left"></div>
                                <div className="background-masker subheader-right"></div>
                                <div className="background-masker subheader-bottom"></div>
                                <div className="background-masker content-top"></div>
                                <div className="background-masker content-first-end" style={{ right: '35px' }}></div>
                                <div className="background-masker content-second-line"></div>
                                <div className="background-masker content-second-end" ></div>
                                <div className="background-masker content-third-line"></div>
                                <div className="background-masker content-third-end"></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr />
                    </div>
                </div>

                <div className="news-section" style={{ marginTop: '10px' }}>

                    <div className="news-section-inner">

                        <div className="timeline-item">
                            <div className="animated-background">
                                <div className="background-masker header-top"></div>
                                <div className="background-masker header-left" style={{ width: '270px' }}></div>
                                <div className="background-masker header-right" style={{ width: '95px' }}></div>
                                <div className="background-masker header-bottom" style={{ height: '12px' }}></div>
                                <div className="background-masker subheader-left"></div>
                                <div className="background-masker subheader-right"></div>
                                <div className="background-masker subheader-bottom"></div>
                                <div className="background-masker content-top"></div>
                                <div className="background-masker content-first-end" style={{ right: '35px' }}></div>
                                <div className="background-masker content-second-line"></div>
                                <div className="background-masker content-second-end" ></div>
                                <div className="background-masker content-third-line"></div>
                                <div className="background-masker content-third-end"></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr />
                    </div>
                </div>



            </div>
        );
    }
}
