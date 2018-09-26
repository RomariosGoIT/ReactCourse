import React, { Component } from 'react';
import Aux from '../../hoc/Auxius';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrower: true 
    }

    sideDrawerClosseHandle = () => {
        this.setState({showSideDrower: false})
    }

    render() {
        return(
            <Aux>
                <Toolbar/>
                <SideDrawer 
                    open={this.state.showSideDrower} 
                    closed={this.sideDrawerClosseHandle}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
    )};
}

export default Layout;