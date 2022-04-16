import React, { useContext } from 'react'
import styles from './Dashboard.module.css'
import PlayButton from '../../assets/img/play.svg'
import { Store } from '../../Context'

export const Dashboard = () => {
    const {points} = useContext(Store)
    return (
        <section className={styles.dashboardContainer}>
            <div className={styles.gameBlock}>
                <p>The most popular game is<br />
                    <b>Speak IT</b>
                </p>
                <img className={styles.btnPlay} src={PlayButton} alt=''/>
                <button className={styles.btnRandom}>Play random game</button>
            </div> 
            <div className={styles.pointsBlock}>
                <span>Common experience</span>
                <h3>{points} points</h3>
            </div>
            <div className={styles.levelBlock}>
                <span>level</span>
                <h3>{(0.2 * Math.sqrt(points)).toFixed()} level</h3>
                <p>Learn 750 new worlds in one course</p>
            </div>
        </section>
    )
}