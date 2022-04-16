import './App.css';
import {Dashboard} from './components/Dashboard/Dashboard';
import {Header} from './components/Header/Header';
import { Library } from './components/Library/Library';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Learn } from './components/Learn/Learn';
import { Games } from './components/Games/Games';
import { WriteIt } from './components/Games/AppGames/WriteIt';
import {CheckIt} from './components/Games/AppGames/CheckIt'
import { Store } from './Context';
import { useCookies } from 'react-cookie';
import { games } from './components/Games';

export function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [errorWords, setErrorWords] = useState(0);
  const [cookie, setCookie] = useCookies(['points'])
  const [points, setPoints] = useState(+cookie.points || 0);
  const playWords = library.slice(-10);

  useEffect(() => {
    if (correctWords) {
      setPoints(current => +current + 1)
      setCookie('points', points)
    }
  }, [correctWords])

  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[4]
    speechSynthesis.speak(speakInstance)
  }  
  return (
    <BrowserRouter>
      <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords, playWords, library, setLibrary, wordIndex, setWordIndex, points, speak}}>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard points={points}/>} />
          <Route path='/library' element={<Library/>} />
          <Route path='/games' element={<Games />} />
          {games.map((game, index) => <Route key={index} path={`/games/${game.path}`} element={<game.component/>} />)}
          <Route path='/learn' element={<Learn/>}/>
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}