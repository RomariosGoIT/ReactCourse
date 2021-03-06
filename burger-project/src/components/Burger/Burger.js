import React from "react";
import classes from "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

const burger = props => {
  let transformIgredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIgredients.length === 0) {
    transformIgredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformIgredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
