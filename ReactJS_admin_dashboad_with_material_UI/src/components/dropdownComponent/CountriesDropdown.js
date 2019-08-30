import React from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import { InputBase } from '@material-ui/core';


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
const searchImage = require('../../assets/images/searchIcon.png');
const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        fontSize: 14,
        width: '100%',
        padding: '10px 40px',
        color: 'grey',
        backgroundColor: '#161a1f',
        backgroundImage: `url(${searchImage})`,
        backgroundSize: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px',
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

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto'
    },
    backGroundAndFont: {
        backgroundColor: '#1f2327', color: '#fff'
    },
    cardHeader: {
        paddingTop: theme.spacing(0), paddingBottom: theme.spacing(0)
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
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
    textField: {
        width: '100%',
        backgroundColor:'#161a1f',
    },
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

export default function CountriesDropdown(countries) {    
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

    const customList = (title, items) => (
        <Card className={classes.card + ' ' + classes.backGroundAndFont}>
            <div className={classes.divTextField}>
            <BootstrapInput placeholder="Search....." id="bootstrap-input" />
            </div>
            <CardHeader
                className={classes.cardHeader + ' ' + classes.backGroundAndFont}
                avatar={cardHeaderAvatar(title, items)}
                title={title}
            />
            <Divider style={{ backgroundColor: 'grey' }} />
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
        //customList('Search all countries', countries.menu1)
        customList('Search all countries', suggestions)
    );
}
