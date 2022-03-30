import './App.css';
import {Dashboard} from './components/Dashboard/Dashboard';
import {Header} from './components/Header/Header';
import { Library } from './components/Library/Library';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}