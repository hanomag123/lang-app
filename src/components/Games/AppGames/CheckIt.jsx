import React, { useEffect, useMemo, useState, useContext } from "react";
import { Store } from "../../../Context";
import { NavLink } from "react-router-dom";
import classes from "./AppGames.module.css"
import styles from '../../../App.module.css'
import { ProgressBar } from "../../ProgressBar/ProgressBar";

export const CheckIt = React.memo(({playWords, wordIndex, setWordIndex, library, points, speak}) => {
    const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2']);
    const randomWords = useMemo(() => playWords.sort(() => Math.random() - 0.5), [])
    const {correctWords, errorWords, setCorrectWords, setErrorWords} = useContext(Store);
    useEffect(() => {
        setCurrentWords([
            randomWords[wordIndex]?.word, 
            randomWords[(wordIndex + 1)%randomWords.length]?.word, 
            randomWords[(wordIndex + 2)%randomWords.length]?.word
        ].sort(() => Math.random() - 0.5))
    }, [correctWords])

    const checkWord = (word) => {
        if (word === randomWords[wordIndex].word) {
            speak(randomWords[wordIndex].translate)
            setCorrectWords(current => ++current)
            wordIndex !== playWords.length - 1 ? setWordIndex(current => current + 1) : alert('Game is over');
        } else {
            setErrorWords(current => ++current)
        }
    }
    return (
        <>
            <ProgressBar library={library} wordIndex={wordIndex}/>
            <nav className={styles.gameNav}>
                <NavLink className={styles.btnBack} to='/games' />
                <ul className={styles.results}>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {points}</li>
                </ul>
            </nav>
    
            <section className={classes.gameContainer}>
                    <span>write a translation for this word</span>
                    <h3>{randomWords[wordIndex]?.translate}</h3>
                    <ul className={classes.btnContainer}>
                        {currentWords.map((word,index) => (
                            <li key={index} className={classes.btnCheck} onClick={() => checkWord(word)}>{word}</li>
                        ))}
                    </ul>
            </section>
        </>
    );
});