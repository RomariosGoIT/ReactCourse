import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../Auxi/Auxius";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrower: false
  };

  sideDrawerClosseHandle = () => {
    this.setState({ showSideDrower: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrower: !prevState.showSideDrower };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticate}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticate}
          open={this.state.showSideDrower}
          closed={this.sideDrawerClosseHandle}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticate: state.auth.token != null
  };
};

export default connect(mapStateToProps)(Layout);
