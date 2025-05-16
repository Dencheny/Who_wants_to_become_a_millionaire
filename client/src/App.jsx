// import Result from './pages/result/Result';
import './App.css';
import MainGame from './pages/MainGame/MainGame';
import Meme from './pages/meme/Meme';
import { Routes, Route, BrowserRouter } from 'react-router';
import Result from './pages/result/Result'; //+++++++++++++
// import Score from './pages/score/Score';//---------------
import Theme from './pages/theme/Theme'; //----------

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Theme />} />
          <Route path="/game" element={<MainGame />} />
          <Route path="*" element={<h1>No content</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
