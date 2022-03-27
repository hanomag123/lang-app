import React from 'react'
import * as styles from './Dashboard.module.css'
import PlayButton from '../../components/assets/img/play.svg'

const Dashboard = () => {
    return (
        <section className={styles.default.dashboardContainer}>
            <div className={styles.default.gameBlock}>
                <p>The most popular game is<br />
                    <b>Speak IT</b>
                </p>
                <img className={styles.default.btnPlay} src={PlayButton} alt=''/>
                <button className={styles.default.btnRandom}>Play random game</button>
            </div> 
            <div className={styles.default.pointsBlock}>
                <span>Common experience</span>
                <h3>238 points</h3>
            </div>
            <div className={styles.default.levelBlock}>
                <span>level</span>
                <h3>7 level</h3>
                <p>Learn 750 new worlds in one course</p>
            </div>
        </section>
    )
}

export default Dashboard