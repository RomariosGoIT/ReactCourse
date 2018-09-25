import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo/>
        <div>MENU</div>        
        <NavItems/>
    </header>
);

export default toolbar;