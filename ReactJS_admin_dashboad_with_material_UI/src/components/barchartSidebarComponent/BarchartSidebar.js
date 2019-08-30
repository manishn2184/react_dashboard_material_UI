import React from 'react'
import '../../assets/css/barchartSidebar.css'
import '../../assets/css/jqvmap.css'
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Chart } from 'react-chartjs-2'; import 'util'
import CloudComponent from '../cloudComponent';
import Button from '@material-ui/core/Button';
import CloudList from '../cloudComponent/cloudListComponent/CloudList';
import { cloudListChange } from "../../App";
import { cloudChange } from "../../App";
import $ from 'jquery'
import '../../assets/js/jquery.vmap'
import '../../assets/js/jquery.vmap.world'

var sample_data = { "af": "16.63", "al": "11.58", "dz": "158.97", "ao": "85.81", "ag": "1.1", "ar": "351.02", "am": "8.83", "au": "1219.72", "at": "366.26", "az": "52.17", "bs": "7.54", "bh": "21.73", "bd": "105.4", "bb": "3.96", "by": "52.89", "be": "461.33", "bz": "1.43", "bj": "6.49", "bt": "1.4", "bo": "19.18", "ba": "16.2", "bw": "12.5", "br": "2023.53", "bn": "11.96", "bg": "44.84", "bf": "8.67", "bi": "1.47", "kh": "11.36", "cm": "21.88", "ca": "1563.66", "cv": "1.57", "cf": "2.11", "td": "7.59", "cl": "199.18", "cn": "5745.13", "co": "283.11", "km": "0.56", "cd": "12.6", "cg": "11.88", "cr": "35.02", "ci": "22.38", "hr": "59.92", "cy": "22.75", "cz": "195.23", "dk": "304.56", "dj": "1.14", "dm": "0.38", "do": "50.87", "ec": "61.49", "eg": "216.83", "sv": "21.8", "gq": "14.55", "er": "2.25", "ee": "19.22", "et": "30.94", "fj": "3.15", "fi": "231.98", "fr": "2555.44", "ga": "12.56", "gm": "1.04", "ge": "11.23", "de": "3305.9", "gh": "18.06", "gr": "305.01", "gd": "0.65", "gt": "40.77", "gn": "4.34", "gw": "0.83", "gy": "2.2", "ht": "6.5", "hn": "15.34", "hk": "226.49", "hu": "132.28", "is": "12.77", "in": "1430.02", "id": "695.06", "ir": "337.9", "iq": "84.14", "ie": "204.14", "il": "201.25", "it": "2036.69", "jm": "13.74", "jp": "5390.9", "jo": "27.13", "kz": "129.76", "ke": "32.42", "ki": "0.15", "kr": "986.26", "undefined": "5.73", "kw": "117.32", "kg": "4.44", "la": "6.34", "lv": "23.39", "lb": "39.15", "ls": "1.8", "lr": "0.98", "ly": "77.91", "lt": "35.73", "lu": "52.43", "mk": "9.58", "mg": "8.33", "mw": "5.04", "my": "218.95", "mv": "1.43", "ml": "9.08", "mt": "7.8", "mr": "3.49", "mu": "9.43", "mx": "1004.04", "md": "5.36", "mn": "5.81", "me": "3.88", "ma": "91.7", "mz": "10.21", "mm": "35.65", "na": "11.45", "np": "15.11", "nl": "770.31", "nz": "138", "ni": "6.38", "ne": "5.6", "ng": "206.66", "no": "413.51", "om": "53.78", "pk": "174.79", "pa": "27.2", "pg": "8.81", "py": "17.17", "pe": "153.55", "ph": "189.06", "pl": "438.88", "pt": "223.7", "qa": "126.52", "ro": "158.39", "ru": "1476.91", "rw": "5.69", "ws": "0.55", "st": "0.19", "sa": "434.44", "sn": "12.66", "rs": "38.92", "sc": "0.92", "sl": "1.9", "sg": "217.38", "sk": "86.26", "si": "46.44", "sb": "0.67", "za": "354.41", "es": "1374.78", "lk": "48.24", "kn": "0.56", "lc": "1", "vc": "0.58", "sd": "65.93", "sr": "3.3", "sz": "3.17", "se": "444.59", "ch": "522.44", "sy": "59.63", "tw": "426.98", "tj": "5.58", "tz": "22.43", "th": "312.61", "tl": "0.62", "tg": "3.07", "to": "0.3", "tt": "21.2", "tn": "43.86", "tr": "729.05", "tm": 0, "ug": "17.12", "ua": "136.56", "ae": "239.65", "gb": "2258.57", "us": "14624.18", "uy": "40.71", "uz": "37.72", "vu": "0.72", "ve": "285.21", "vn": "101.99", "ye": "30.02", "zm": "15.69", "zw": "5.57" };

$(document).ready(function () {
    $('#chartdiv').vectorMap({
        map: 'world_en',
        backgroundColor: 'none',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        zoomOnScroll: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial'
    });
});

const netflixImage = require('../../assets/images/netflix.png')
const twitterImage = require('../../assets/images/twitter.png')
const googleImage = require('../../assets/images/google.png')
const apImage = require('../../assets/images/ap.png')
const usaImage = require('../../assets/images/usa.png')
const usa1Image = require('../../assets/images/usa1.png')
const usa2Image = require('../../assets/images/usa2.png')
const canadaImage = require('../../assets/images/canada.png')
const canada1Image = require('../../assets/images/canada1.png')

function handleClick() {
    cloudListChange()
}
function cloudClick() {
    cloudChange()
}

export default function BarchartSidebar() {
    var chartData = {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            type: 'line',
            label: 'Total Document Count',
            borderColor: 'rgb(26,105,251)',
            height: '20px',
            fill: false,
            data: [
                2000000,
                4200000,
                2800000,
                5200000,
                3800000,
                1600000,
                4100000,
                2600000,
                3500000,
                2500000,
                4800000
            ]
        }, {
            type: 'bar',
            label: 'Academic',
            backgroundColor: 'rgb(105, 181, 205)',
            data: [
                2000000,
                4200000,
                2800000,
                5200000,
                3800000,
                1600000,
                4100000,
                2600000,
                3500000,
                2500000,
                4800000
            ],
            borderColor: 'white',
            borderWidth: 0
        }, {
            type: 'bar',
            label: 'Government',
            backgroundColor: 'rgb(77, 135, 152)',
            data: [
                2100000,
                3500000,
                1500000,
                3500000,
                4500000,
                4200000,
                4000000,
                2600000,
                3100000,
                1900000,
                2000000
            ]
        },
        {
            type: 'bar',
            label: 'Patents',
            backgroundColor: 'rgb(80, 60, 59)',
            data: [
                1200000,
                4900000,
                2400000,
                2100000,
                3000000,
                3400000,
                4200000,
                4100000,
                1600000,
                4700000,
                3000000
            ]
        },
        {
            type: 'bar',
            label: 'News',
            backgroundColor: 'rgb(203, 90, 123)',
            data: [
                1200000,
                3000000,
                4300000,
                2100000,
                2500000,
                4500000,
                3500000,
                2700000,
                2900000,
                4900000,
                1800000
            ]
        }]
    };
    window.onload = function () {
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myMixedChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Combo Bar Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    };

    return (
        <div>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} >
                    <div className="placeholder MR100" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                        <h4 style={{ marginBottom: '0', color: '#fff', textAlign: 'left', padding: '20px 20px 20px 45px', fontWeight: 'bold' }}> Documents over time </h4>

                        <canvas height="55%" id="canvas"></canvas>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} id='relatedCompaniesContainer'>
                    <div className="placeholder">
                        <h4 style={{ marginBottom: '0', color: '#fff', textAlign: 'left', padding: '20px 20px 20px 45px', fontWeight: 'bold' }}> Related companies </h4>

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
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={googleImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 18 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={apImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 15 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='40' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>

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
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={googleImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 18 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>
                        <h5 style={{ margin: '0 40px 10px', textAlign: 'right' }}> <span
                            style={{ float: 'left', padding: '5px 0 5px' }}> <img src={apImage} alt="" /> </span> <span
                                style={{ float: 'right', padding: '20px 0 5px', color: 'grey' }}> 15 321 </span> </h5>
                        <div className="clear"></div>
                        <div className="progress">
                            <LinearProgress variant="determinate" value='40' style={{ background: '#333' }} />
                            <span class="sr-only">70% Complete</span>
                        </div>


                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="placeholder" style={{ height: '290px' }}>

                        <h4> Topics
                        <Button variant="contained" id="btncloudlist" onClick={handleClick} className="round-c pull-right" style={{ color: 'white', background: '#171A1F', margin: '0 10px', fontSize: '0.7em' }}> List </Button>

                            <Button variant="contained" id="btncloud" onClick={cloudClick} className="round-c pull-right" style={{ color: 'white', background: '#1065FF', margin: '0 10px', fontSize: '0.7em' }}> Cloud  </Button>

                        </h4>
                        <div className='scroller-wrapper' style={{ position: 'relative' }}>

                            <div id="cloud" >
                                <CloudComponent />
                            </div>
                            <div id="cloudlist" style={{ height: '220px', display: 'none', overflow: 'auto' }}>
                                <CloudList />
                            </div>


                        </div>


                    </div>
                </Grid>

                <Grid container spacing={4} className="placeholder" style={{ color: 'white', margin: '0 20px' }}>
                    <Grid item xs={12} sm={6} style={{ padding: '20px' }}>
                        <h4 style={{ padding: '10px 20px 0 32px', fontWeight: 'bold' }}> Countries </h4>
                        <div id="chartdiv"></div>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ paddingRight: '50px' }} id='countriesListContainer'>
                        <h4 style={{ padding: '10px 20px 0 32px', visibility: 'hidden' }}> Countries </h4>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usaImage} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 25 000 </span> </h5>

                        <div class="clear"></div>

                        <LinearProgress variant="determinate" value='70' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>

                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={canadaImage} alt=""/> CANADA </span> <span
                            style={{ float: 'right' }}> 20 342 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='50' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usa1Image} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 18 321 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='20' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>

                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={canada1Image} alt="" /> CANADA </span>
                            <span style={{ float: 'right' }}> 15 321 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='60' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usa2Image} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 7 103 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usaImage} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 25 000 </span> </h5>

                        <div class="clear"></div>

                        <LinearProgress variant="determinate" value='70' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>

                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={canadaImage} alt="" /> CANADA </span> <span
                            style={{ float: 'right' }}> 20 342 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='50' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usa1Image} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 18 321 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='20' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>

                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={canada1Image} alt="" /> CANADA </span>
                            <span style={{ float: 'right' }}> 15 321 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='60' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>
                        <h5> <span style={{ float: 'left', padding: '5px 0 15px' }}> <img src={usa2Image} alt="" /> USA </span> <span
                            style={{ float: 'right' }}> 7 103 </span> </h5>
                        <div class="clear"></div>
                        <LinearProgress variant="determinate" value='30' style={{ background: '#333' }} />
                        <span class="sr-only">70% Complete</span>

                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}