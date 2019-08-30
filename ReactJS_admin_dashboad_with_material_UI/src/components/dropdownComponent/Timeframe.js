import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 300,
        paddingTop: "20px"
    },backGroundAndFont: {
        backgroundColor: '#1f2327', color: '#fff'
    },papperStyle:{
        padding:'15px 10px',width:'382px',fontWeight:'bold',fontSize:'16px'
    }
});

function valuetext(event, value1) {
    return `${value1}°C`;
}
var left = 1995;
var right = 2012;


export default function Timeframe() {
    const classes = useStyles();
    const [value, setValue] = React.useState([1995, 2012]);

    const handleChange = (event, newValue) => {
        left = newValue[0];
        right = newValue[1];
        setValue(newValue);
    };
    return (
        <Paper className={classes.backGroundAndFont+' '+classes.papperStyle}>
            <span>{left}</span>  &nbsp; &nbsp;
            <Slider style={{width:'250px'}}
                min={1990}
                max={2015}
                step={1}
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            /> &nbsp; &nbsp; <span>{right}</span>
        </Paper>
    );
}