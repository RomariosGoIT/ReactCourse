import React from 'react';
import NavItem from '../NavigationItems/NavItem/NavItem';
import classes from './NavItems.css'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>Burger Builder</NavItem>
        {props.isAuthenticate ? <NavItem link="/orders">Orders</NavItem> : null}
        {!props.isAuthenticate 
            ? <NavItem link="/auth">Authenticate</NavItem>
            : <NavItem link="/logout">Logout</NavItem> 
        }
    </ul>
);

export default navItems;