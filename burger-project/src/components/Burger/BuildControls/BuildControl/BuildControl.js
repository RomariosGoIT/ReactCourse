import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingridientLable}</div>
        <button className={classes.More} onClick={props.added}>More</button>
        <button className={classes.Less} onClick={props.removed} disabled={props.disable}>Less</button>         
    </div>
);


export default buildControl;