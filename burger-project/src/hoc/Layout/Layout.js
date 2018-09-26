import React, { Component } from 'react';

import Aux from '../Auxi/Auxius';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrower: false 
    }

    sideDrawerClosseHandle = () => {
        this.setState({showSideDrower: false})    
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {showSideDrower: !prevState.showSideDrower}
        })
    }

    render() {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
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