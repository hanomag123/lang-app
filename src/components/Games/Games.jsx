import React from "react";
import styles from "./Games.module.css";

import imgCheckCorrect from './../../assets/img/check-the-correct-one.svg';
import imgSelectTranslation from './../../assets/img/select-translation.svg';
import imgSpringGuess from './../../assets/img/sprint-guess.svg';
import imgPutTranslation from './../../assets/img/put-translation.svg';
import imgSpeakAndCheck from './../../assets/img/speak-and-check.svg';
import imgSpringListen from './../../assets/img/listen-sprint.svg';
import imgRememberTranslation from './../../assets/img/remember-translation.svg';
import imgWriteTranslation from './../../assets/img/write-translation.svg';
import imgListenAndGuess from './../../assets/img/listen-and-guess.svg';
import { NavLink } from "react-router-dom";

export const Games = ({}) => {

    const GAMES = [
        {img: imgCheckCorrect, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSelectTranslation, path: 'write-it', name: 'Write correct word', description: 'Write correct word'},
        {img: imgSpringGuess, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgPutTranslation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSpeakAndCheck, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSpringListen, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgRememberTranslation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgWriteTranslation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgListenAndGuess, path: 'check-it', name: 'Check correct word', description: 'Check correct word'}
    ]

    return (
        <section className={styles.gameContainer}>
            {GAMES.map((game, index) => (
                <NavLink key={index} to={'/game/' + game.path}>
                    <div className={styles.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>

                        <img src={game.img} alt="gameImage" />
                    </div>
                </NavLink>
            ))}
        </section>
    );
}