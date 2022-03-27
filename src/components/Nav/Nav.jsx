import React from 'react'
import * as styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.default.nav}>
            <a href=''>Home</a>
            <a href=''>Games</a>
            <a href=''>Library</a>
            <a href=''>Learn</a>
        </nav>
    )
};

export default Nav