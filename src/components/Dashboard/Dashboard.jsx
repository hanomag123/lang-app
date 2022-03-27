import React from 'react'
import * as styles from './Dashboard.module.css'
import PlayButton from '../../components/assets/img/playButton.svg'

const Dashboard = () => {
    return (
        <section className={styles.default.dashboard__container}>
            <div className={styles.default.game__block}>
                <p>The most popular game is<br />
                    <b>Speak IT</b>
                </p>
                <img className={styles.default.btn__play} src={PlayButton} alt=''/>
                <button className={styles.default.btn__random}>Play random game</button>
            </div> 
            <div className={styles.default.points__block}>
                <span>Common experience</span>
                <h3>238 points</h3>
            </div>
            <div className={styles.default.level__block}>
                <span>level</span>
                <h3>7 level</h3>
                <p>Learn 750 new worlds in one course</p>
            </div>
        </section>
    )
}

export default Dashboard