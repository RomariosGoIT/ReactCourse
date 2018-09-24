import React from 'react';
import classes from './Burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'

const burger = (props) => {
    const transformIgredients = Object.keys(props.ingredients)
    .map(igKey => {
        console.log(igKey)
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngridient key={igKey + i} type={igKey} />
        }); 
    })
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformIgredients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default burger;