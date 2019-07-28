import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
    card: {
      minWidth: 275,
      margin: 50
    },
    date: {
        textAlign: 'center'
    },
    name: {
        textAlign: 'center',
        marginTop: 20
    }
  });

export default function({holiday}) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            {holiday.map((day, idx)=>(
                <Card key={idx} className={classes.card}>
                    <CardContent>
                        <h2 className={classes.date}>{day.date}</h2>
                        <h4 className={classes.name}>{day.name}</h4>
                    </CardContent>
                </Card>
            ))}
        </div>
        
    )
}