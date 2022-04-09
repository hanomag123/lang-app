import React, { useEffect } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from '../../App.module.css'

export const Learn = ({library, wordIndex, speak, setWordIndex}) => {

    useEffect(() => {
        speak(library[wordIndex].translate)
    }, [wordIndex])

    return (
            <>
            <ProgressBar library={library} wordIndex={wordIndex}/>
            <section style={{textAlign: 'center'}}>
                <span>{library[wordIndex].word}</span>
                <h3>{library[wordIndex].translate}</h3>
            </section>
            <div onClick={() => {wordIndex === library.length - 1 ? setWordIndex(0) : setWordIndex(wordIndex + 1)
            }} className={styles.btnNext}></div>
            </>
    );
}