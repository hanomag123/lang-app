import React from 'react'
import {ReactComponent as Logo} from '../../components/assets/img/Icon.svg'
import Nav from '../Nav/Nav'
import * as styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.default.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header