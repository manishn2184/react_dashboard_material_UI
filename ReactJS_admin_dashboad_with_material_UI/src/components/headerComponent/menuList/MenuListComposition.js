import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import CountriesDropdown from '../../dropdownComponent/CountriesDropdown';
import { SourceDropdown } from '../../dropdownComponent/SourceDropdown';
import IndustriesDropdown from '../../dropdownComponent/IndustriesDropdown';
import Timeframe from '../../dropdownComponent/Timeframe';

const profileImage = require('../../../assets/images/profile.png');
const sourceImage = require('../../../assets/images/Sources.png');
const countriesImage = require('../../../assets/images/Countries.png');
const industriesImage = require('../../../assets/images/Industries.png');
const timeFrameImage = require('../../../assets/images/Timeframe.png');

export default function MenuListComposition1() {
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    return (

        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
                className="dropdown-toggle" style={{ color: 'white', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                <img src={sourceImage} alt=""/> &nbsp; Sources <span className="caret"></span>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', position: 'absolute', left: '-50px' }}
                    >
                        <Paper id="menu-list-grow" style={{ width: '250px' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div onClickAway={handleClose}><SourceDropdown /></div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export function MenuListComposition2() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    
    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }
    return (

        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
                className="dropdown-toggle" style={{ color: 'white', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                <img src={countriesImage} alt=""/> &nbsp; Countries <span className="caret"></span>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', position: 'absolute', left: '-50px', backgroundColor: '#171a1f' }}
                    >
                        <Paper id="menu-list-grow" style={{ width: '250px' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div onClickAway={handleClose}>
                                    <CountriesDropdown  />
                                    {/* <CountriesDropdown menu1={menu.content.aggregations.publishLocation.buckets} /> */}
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export function MenuListComposition3() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    return (

        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
                className="dropdown-toggle" style={{ color: 'white', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                <img src={industriesImage} alt=""/> &nbsp; Industries <span className="caret"></span>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', position: 'absolute', left: '-50px' }}
                    >
                        <Paper id="menu-list-grow" style={{ width: '300px' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div onClickAway={handleClose}>
                                    <IndustriesDropdown />
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export function MenuListComposition4() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }


    return (

        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
                className="dropdown-toggle" style={{ color: '#fff', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                <img src={timeFrameImage} alt="" /> &nbsp;  Timeframe <span className="caret"></span>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', position: 'absolute', left: '-50px' }}
                    >
                         <Paper id="menu-list-grow" style={{ width: '300px' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <div onClickAway={handleClose}>
                                    <Timeframe />   
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}


export function ProfileMenu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
        setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }


    return (

        <div>
            <Button
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleToggle}
                className="dropdown-toggle" style={{ color: '#fff', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                <img src={profileImage} alt="" />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', position: 'absolute', left: '-100px' }}
                    >
                        <Paper id="menu-list-grow">
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList>
                                    <MenuItem onClick={handleClose}>Action</MenuItem>
                                    <MenuItem onClick={handleClose}>Another action</MenuItem>
                                    <MenuItem onClick={handleClose}>Something else here</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
