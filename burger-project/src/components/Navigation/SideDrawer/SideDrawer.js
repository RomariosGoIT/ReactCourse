import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxius'




const sideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    console.log(attachedClasses)
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>           
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;