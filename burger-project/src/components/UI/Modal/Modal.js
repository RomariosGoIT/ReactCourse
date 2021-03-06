import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxi/Auxius";
import BackDrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={this.props.loader ? classes.Loader : classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-120vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
