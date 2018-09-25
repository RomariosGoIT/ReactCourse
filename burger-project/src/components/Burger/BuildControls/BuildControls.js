import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => (
    
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong> UAH</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            ingridientLable={ctrl.label}
            added={()=>props.ingrAdded(ctrl.type)} 
            removed={()=>props.ingrRemoved(ctrl.type)}
            disable={props.disable[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseble}>ORDER NOW</button>
    </div>
);


export default buildControls;