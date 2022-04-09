import React from "react";
import styles from "../../App.module.css"

export const ProgressBar = ({library, wordIndex}) => {
    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`
    }
    return (
        <div className={styles.progressBarContainer}>
            <div className ={styles.progressBar} style={progressBarWidth}></div>
        </div>
    );
}