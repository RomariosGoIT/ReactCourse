import React from 'react';
import NavItem from '../NavigationItems/NavItem/NavItem';
import classes from './NavItems.css'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/" exact>Burger Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
        <NavItem link="/auth">Authenticate</NavItem>
    </ul>
);

export default navItems;