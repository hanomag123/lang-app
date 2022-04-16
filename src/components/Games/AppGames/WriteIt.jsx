import React, { useRef, useState, useContext } from "react";
import { Store } from "../../../Context";
import { NavLink } from "react-router-dom";
import classes from "./AppGames.module.css"
import styles from '../../../App.module.css'
import { ProgressBar } from "../../ProgressBar/ProgressBar";

export const WriteIt = React.memo(() => {
    const {correctWords, errorWords, setCorrectWords, setErrorWords, playWords, wordIndex, setWordIndex, points, speak} = useContext(Store);
    const input = useRef()
    const [randomWords, setRandomWords] = useState(playWords.sort(() => Math.random() - 0.5));

    const checkWord = (event) => {
        event.preventDefault();
        if (input.current.value === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate)
            setCorrectWords(current => ++current)
            wordIndex !== playWords.length - 1 ? setWordIndex(current => current + 1) : alert('Game is over');
            input.current.value = '';
        } else {
            setErrorWords(current => ++current)
        }
    }
    return (
        <>
            <ProgressBar/>
            <nav className={styles.gameNav}>
                <NavLink className={styles.btnBack} to='/games' />
                <ul className={styles.results}>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {points}</li>
                </ul>
            </nav>
    
            <section className={styles.gameContainer}>
                    <span>write a translation for this word</span>
                    <h3>{randomWords[wordIndex]?.word}</h3>
                <form onSubmit={checkWord} className={classes.writeWordBlock}>

                    <input ref={input} type='text' />
                    <button className={classes.btnOk}>OK</button>
                </form>
            </section>
        </>
    );
});