import React from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { ListSubheader, Button, Card, CardHeader, InputBase, Popper, Grow, Paper } from '@material-ui/core';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        fontSize: 16,
        width: '100%',
        padding: '10px 40px',
        color: 'grey',
        background: '#161a1f url(https://image.flaticon.com/icons/png/512/55/55369.png)',
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto'
    },

    cardHeader: {
    },

    backGroundAndFont: {
        backgroundColor: '#1f2327', color: '#fff'
    },
    card: {
        padding: theme.spacing(0)
    }, divTextField: {
        paddingRight: '22px',
        paddingLeft: '22px',
        paddingTop: '5px'
    },
    list: {
        width: '100%',
        height: 450,
        overflow: 'auto'
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
    textField: {
        width: '100%',
        backgroundColor: '#161a1f',
    }, paper: {
        backgroundColor: '#1f2327',
    },
    listSubhead: {
        backgroundColor: '#33393e', color: '#fff', position: 'static', fontSize: '12px'

    }
}));

function not(a, b) {
    return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}
export function SourceDropdown(content) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);
    const [left] = React.useState([0, 1, 2, 3]);
    const [right] = React.useState([4, 5, 6]);
    const [center] = React.useState([7, 8,]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (suggestions, right, center) => intersection(checked, suggestions).length;

    const handleToggleAll = items => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };


    function handleClick(event) {
        // setAnchorEl(event.currentTarget);
    }


    const [open1, setOpen1] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle1() {
        console.log('source')
        console.log(content);
        setOpen1(prevOpen => !prevOpen);
    }

    const customList = (suggestions, left, right, center) => (

        <div className={classes.paper}>
            <List dense component="div" role="list">
                <ListItem key='All Sources'
                    role="listitem"
                    button
                    onClick={handleToggle('All Sources')}>
                    <ListItemIcon>
                        <Checkbox
                            onClick={handleToggleAll(suggestions)}
                            checked={numberOfChecked(suggestions) === suggestions.length && suggestions.length !== 0}
                            indeterminate={
                                numberOfChecked(suggestions) !== suggestions.length &&
                                numberOfChecked(suggestions) !== 0
                            }
                            disabled={suggestions.length === 0}
                            color="primary"
                            inputProps={{ "aria-label": "all items selected" }}
                        />
                    </ListItemIcon>
                    <ListItemText id={'abc'} button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                        <div>
                            <Button
                                ref={anchorRef}
                                aria-controls="menu-list-grow"
                                aria-haspopup="true"
                                onClick={handleToggle1}
                                className="dropdown-toggle" style={{ color: 'white', boxSizing: 'border-box', fontSize: 'inherit', textTransform: 'none' }}>
                                All Sources
                            </Button>
                            <Popper open={open1} anchorEl={anchorRef.current} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ position: 'absolute', backgroundColor: '#171a1f', left: '133px', top: '-52px' }}
                                    >
                                        <Paper id="menu-list-grow" style={{ width: '250px' }}>
                                            <div >
                                                {/* <AllSourcesPopper /> */}
                                                <Card className={classes.card + ' ' + classes.backGroundAndFont} style={{}}>
                                                    <CardHeader
                                                        className={classes.cardHeader + ' ' + classes.backGroundAndFont}
                                                        title={<BootstrapInput placeholder="Search....." id="bootstrap-input" />}
                                                    />
                                                    <List className={classes.list + ' ' + classes.backGroundAndFont} dense component="div" role="list">
                                                        {suggestions.map(value => {
                                                            const labelId = `transfer-list-all-item-${value.label}-label`;
                                                            return (
                                                                <ListItem key={value.label} role="listitem" button onClick={handleToggle(value.label)}>
                                                                    <ListItemIcon>
                                                                        <Checkbox
                                                                            tabIndex={-1}
                                                                            disableRipple
                                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                                            color='primary'
                                                                        />
                                                                    </ListItemIcon>
                                                                    <ListItemText id={labelId} primary={`${value.label}`} style={{ fontWeight: 'bold !important' }} />
                                                                </ListItem>
                                                            );
                                                        })}
                                                        <ListItem />
                                                    </List>
                                                </Card>
                                            </div>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </ListItemText>
                    <ListItemText className="text-right" id={'abc'} primary={<span class="caret-left"></span>} />
                </ListItem>
                <ListSubheader className={classes.listSubhead} disabled >{`COMPANY DOCS`}</ListSubheader>
                {left.map(value => {
                    const labelId = `transfer-list-item-${value}-label`;
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button style={{ borderBottom: '1px solid #585858' }}
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    color='primary'
                                    inputProps={{ "aria-labelledby": labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Source ${value + 1}`} />
                            <ListItemText className="text-right" id={'abc'} primary={<span class="caret-left"></span>} />
                        </ListItem>
                    );
                })}

                <ListItem />
                <ListSubheader className={classes.listSubhead} disabled >{`NEWS`}</ListSubheader>
                {right.map(value => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button style={{ borderBottom: '1px solid #585858' }}
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    color='primary'
                                    inputProps={{ "aria-labelledby": labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Source ${value + 1}`} />
                            <ListItemText className="text-right" id={'abc'} primary={<span class="caret-left"></span>} />
                        </ListItem>
                    );
                })}
                <ListItem />
                <ListSubheader className={classes.listSubhead} disabled >{`COMPANY DOCS`}</ListSubheader>
                {center.map(value => {
                    const labelId = `transfer-list-item-${value}-label`;

                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button style={{ borderBottom: '1px solid #585858' }}
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    color='primary'
                                    inputProps={{ "aria-labelledby": labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Source ${value + 1}`} />
                            <ListItemText className="text-right" id={'abc'} primary={<span class="caret-left"></span>} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </div>
    );

    return (customList(suggestions, left, right, center));
}

export function AllSourcesPopper() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState([]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const customList1 = (title, items) => (
        <Card className={classes.card + ' ' + classes.backGroundAndFont} style={{}}>
            <CardHeader
                className={classes.cardHeader + ' ' + classes.backGroundAndFont}
                title={<BootstrapInput placeholder="Search....." id="bootstrap-input" />}
            />
            <List className={classes.list + ' ' + classes.backGroundAndFont} dense component="div" role="list">
                {items.map(value => {
                    const labelId = `transfer-list-all-item-${value}-label`;
                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    color='primary'
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.label}`} style={{ fontWeight: 'bold !important' }} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        customList1('Search all countries', suggestions)
    );
}


const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
];