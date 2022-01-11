import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import GameScreen from './components/GameScreen';
import Header from './components/Header';
import RulesModal from './components/RulesModal';

function App() {
  const modal = useSelector((state) => state.modal);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<MainScreen />} />
          <Route path='/game' element={<GameScreen />} />
        </Routes>
        {modal && <RulesModal />}
      </BrowserRouter>
    </div>
  );
}

export default App;
