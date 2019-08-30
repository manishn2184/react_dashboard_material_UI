import React from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import { InputBase, Popper, Grow, Paper, Button } from '@material-ui/core';


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
const suggestions = [
    { label: 'Communication Service' },
    { label: 'Customer Staples' },
    { label: 'Energy' },
    { label: 'Financial' },
    { label: 'Source 1' },
    { label: 'Source 2' },
    { label: 'Source 3' },
    { label: 'Source 4' },
    { label: 'Source 5' },
];

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto'
    },
    backGroundAndFont: {
        backgroundColor: '#1f2327', color: '#fff'
    },
    cardHeader: {
        paddingTop: theme.spacing(1), paddingBottom: theme.spacing(0)
    },
    card: {
        padding: theme.spacing(0)
    }, divTextField: {
        paddingRight: '29px',
        paddingLeft: '29px',
        paddingTop: '10px'
    },
    list: {
        width: '100%',
        height: 450,
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
    textField: {
        width: '100%',
        backgroundColor: '#161a1f',
    },roundCButton: {
        color: 'white', fontSize: '0.7em',borderRadius:'20px',fontWeight:'bold'
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
export default function IndustriesDropdown() {
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

    const numberOfChecked = items => intersection(checked, items).length;

    const handleToggleAll = items => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const cardHeaderAvatar = (title, items) => (
        <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            color='primary'
            inputProps={{ 'aria-label': 'all items selected' }}
        />
    );
    const [open1, setOpen1] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle1() {
        //console.log('toggle')
        setOpen1(prevOpen => !prevOpen);
    }

    const customList = (title, items) => (
        <div>

            <Card className={classes.card + ' ' + classes.backGroundAndFont}>
                <div className={classes.divTextField}>
                    <Button variant="contained" className={`round-c ${classes.roundCButton}`} style={{background: '#1065FF'}}> Restore Default  </Button>
                    <Button variant="contained" className={`round-c ${classes.roundCButton}`} style={{ marginLeft:'10px',background:'#171A1F'}}> Set Default </Button>
                </div>
                <CardHeader
                    className={classes.cardHeader + ' ' + classes.backGroundAndFont}
                    avatar={cardHeaderAvatar(title, items)}
                    title={title}
                   button style={{ cursor: 'pointer' }}
                //subheader={`${numberOfChecked(items)}/${items.length} selected`}
                />
                <List className={classes.list + ' ' + classes.backGroundAndFont} dense component="div" role="list">
                    {items.map(value => {
                        const labelId = `transfer-list-all-item-${value}-label`;

                        return (
                            <ListItem key={value} role="listitem" button style={{ borderBottom: '1px solid #585858' }} >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        onClick={handleToggle(value)}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        color='primary'
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.label}`} style={{ fontWeight: 'bold !important' }}
                                    ref={anchorRef}
                                    aria-controls="menu-list-grow"
                                    aria-haspopup="true"
                                    onClick={handleToggle1}
                                    className="dropdown-toggle"
                                />

                                <ListItemText className="text-right" id={'abc'} primary={<span class="caret-left"></span>} />
                            </ListItem>
                        );
                    })}
                    <ListItem />
                </List>
            </Card>
            <Popper open={open1} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ position: 'absolute', backgroundColor: '#171a1f', left: '163px', top: '-484px' }}
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
    );
    return (
        customList('All industries and sector', suggestions)
    );
}