import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  let validationError = null;

  if (props.invalid && props.touched) {
    if (props.elementConfig.type === "password") {
      validationError = (
        <p className={classes.ValidationError}>
          Password should be at least 6 character!
        </p>
      );
    } else {
      validationError = (
        <p className={classes.ValidationError}>
          Please enter a valid {props.elementConfig.type}!
        </p>
      );
    }
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Lable}>{props.lable}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
