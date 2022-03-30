import React from 'react'
import {ReactComponent as Logo} from '../../assets/img/Icon.svg'
import {Nav} from './Nav/Nav'
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>
    )
}

