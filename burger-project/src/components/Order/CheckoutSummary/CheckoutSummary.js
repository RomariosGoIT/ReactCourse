import React from "react";
import classes from "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Buttons/Button";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Confirm the order!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.chekoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.chekoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
