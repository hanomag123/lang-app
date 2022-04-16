import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/games'>
                Games
            </NavLink>
            <NavLink to='/library'>
                Library
            </NavLink>
            <NavLink to='/learn'>
                Learn
            </NavLink>
        </nav>
    )
};