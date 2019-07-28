import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
        height: '40px'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function({getHolidays}) {
    const classes = useStyles();
    const monts = [
        {id:'01',name: 'January'},
        {id:'02',name: 'February'},
        {id:'03',name: 'March'},
        {id:'04',name: 'April'},
        {id:'05',name: 'May'},
        {id:'06',name: 'June'},
        {id:'07',name: 'July'},
        {id:'08',name: 'August'},
        {id:'09',name: 'September'},
        {id:'10',name: 'October'},
        {id:'11',name: 'November'},
        {id:'12',name: 'December'}
    ]

    const [country, setCountry] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')

    const _changeCountry = (e) => {
        setCountry(e.target.value)
    }
    const _changeYear = (e) => {
        setYear(e.target.value)
    }
    const _changeMonth = (e) => {
        setMonth(e.target.value)
    }

    const _sendData = () => {
        if(country === '' || year === '' || month === '') {
            let message = 'Los campos no pueden ir vacios'
            document.getElementById('message-err').innerHTML = message
            setTimeout(() => {
                document.getElementById('message-err').innerHTML = ''
            }, 3000);
            return
        }
        getHolidays(country, year, month)
    }

    return(
        <div>
            <form>
                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="country-required">Country</InputLabel>
                    <Select
                        value={country}
                        onChange={_changeCountry}
                        name="country"
                        inputProps={{
                        id: 'country-required',
                        }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'MX'}>México</MenuItem>
                        <MenuItem value={'US'}>United States</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="year-required">Year</InputLabel>
                    <Select
                        value={year}
                        onChange={_changeYear}
                        name="year"
                        inputProps={{
                        id: 'year-required',
                        }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'2019'}>2019</MenuItem>
                        <MenuItem value={'2020'}>2020</MenuItem>
                        <MenuItem value={'2021'}>2021</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <FormControl required className={classes.formControl}>
                    <InputLabel htmlFor="month-required">Month</InputLabel>
                    <Select
                        value={month}
                        onChange={_changeMonth}
                        name="mont"
                        inputProps={{
                        id: 'mont-required',
                        }}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        {monts.map((mont, idx) => {
                            return(
                                <MenuItem key={idx} value={mont.id}>{mont.name}</MenuItem>
                            )
                        })}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={_sendData}
                    className={classes.button}>
                    Send
                </Button>
            </form>
            <div className="message-err" id="message-err"></div>
        </div>
    )
}