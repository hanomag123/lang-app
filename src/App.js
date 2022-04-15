import './App.css';
import styles from './App.module.css'
import {Dashboard} from './components/Dashboard/Dashboard';
import {Header} from './components/Header/Header';
import { Library } from './components/Library/Library';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Learn } from './components/Learn/Learn';
import { Games } from './components/Games/Games';
import { WriteIt } from './components/Games/AppGames/WriteIt';
import {CheckIt} from './components/Games/AppGames/CheckIt'
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Store } from './Context';
import { useCookies } from 'react-cookie';

export function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [wordIndex, setWordIndex] = useState(0);
  const [playWords, setPlayWords] = useState(library.slice(-10));
  const [correctWords, setCorrectWords] = useState(0);
  const [errorWords, setErrorWords] = useState(0);
  const [cookie, setCookie] = useCookies(['points'])
  const [points, setPoints] = useState(+cookie.points || 0);

  useEffect(() => {
    if (correctWords) {
      setPoints(current => +current + 1)
      setCookie('points', +points + 1)
    }
  }, [correctWords])

  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[4]
    speechSynthesis.speak(speakInstance)
  }  
  return (
    <BrowserRouter>
      <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords}}>
        <Header />
        <Routes>
          <Route path='/dashboard' element={<Dashboard points={points}/>} />
          <Route path='/library' element={<Library library={library} setLibrary={setLibrary} />} />
          <Route path='/games' element={<Games />} />
          <Route path='/game/write-it' element={<WriteIt library={library} 
                                                          playWords={playWords} 
                                                          wordIndex={wordIndex} 
                                                          setWordIndex={setWordIndex}
                                                          points={points}
                                                          speak={speak}
                                                          />} />
          <Route path='/game/check-it' element={<CheckIt library={library} 
                                                          playWords={playWords} 
                                                          wordIndex={wordIndex} 
                                                          setWordIndex={setWordIndex}
                                                          points={points}
                                                          speak={speak}
                                                          />} />
          <Route path='/learn' element={<Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex}/>}/>
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}