import React, { useContext, useState } from 'react'
import styles from './Library.module.css'
import addBtn from './../../assets/img/add.svg'
import deleteBtn from './../../assets/img/delete.svg'
import { Store } from '../../Context'

export const Library = () => {
    const {library, setLibrary} = useContext(Store)
    const [input, setInput] = useState('')
    const deleteWord = (id) => {
        const updateLibrary = library.filter((_, index) => index !== id);
        setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary));
    }

    const addNewWord = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${input}`);
        const translation = await response.json();
        const updateLibrary = [...library, {word: translation.word, translate: translation.translate, learn: 0}];
        setLibrary(updateLibrary);
        localStorage.setItem('library', JSON.stringify(updateLibrary));
        setInput('');
    }
    return (
        <section className={styles.libraryBlock}>
            <span>Add new <b>Word</b></span>

            <form onSubmit={addNewWord} className={styles.addWordBlock}>
                <input onChange={e => setInput(e.target.value)} value={input} type='text' />

                <button>
                    <img src={addBtn} alt='addButton'/>
                </button>
            </form>

            <div className={styles.wordsTable}>
                <ul>
                    <li>
                        <h3>Word</h3>
                    </li>
                    <li>
                        <h3>Translation</h3>
                    </li>
                    <li>
                        <h3>Learn</h3>
                    </li>
                </ul>

                {library.map((word, index) => (
                    <ul key={index}>
                        <li>{word.word}</li>
                        <li>{word.translate}</li>
                        <li>{word.learn}</li>

                        <div className={styles.settings}>
                            <button onClick={() => deleteWord(index)}>
                                <img src={deleteBtn} alt="deleteButton" />
                            </button>
                        </div>
                    </ul>
                ))}
            </div>
        </section>
    )
}