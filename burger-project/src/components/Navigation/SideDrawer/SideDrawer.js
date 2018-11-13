import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxius'




const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(        
        <Aux>
            <BackDrop  show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>           
                <nav>
                    <NavItems
                        isAuthenticate={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
    
};

export default sideDrawer;