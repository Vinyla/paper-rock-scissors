import React, { useEffect } from 'react';
import ResultMessage from './ResultMessage';
import PlayAgain from './PlayAgain';
import { useSelector, useDispatch } from 'react-redux';
import { computerRandomPick } from '../redux/actions/gameActions';

const GameScreen = () => {
  const playerWeapon = useSelector((state) => state.player.playerWeapon);
  const computerWeapon = useSelector((state) => state.computer);
  const result = useSelector((state) => state.results);
  const score = useSelector((state) => state.score.score);

  const dispatch = useDispatch();

  const getComputerPick = () => {
    const weapons = ['paper', 'rock', 'scissors'];
    const randomPick = weapons[Math.floor(Math.random() * weapons.length)];
    dispatch(computerRandomPick(randomPick));
  };

  useEffect(() => {
    getComputerPick();
  }, [playerWeapon]);

  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('playerWeapon', playerWeapon);
  }, [score, playerWeapon]);

  return (
    <div>
      <ResultMessage />
      <div className='game'>
        <div>
          <p>YOU</p>
          <img
            className='rotated-right'
            src={`/images/${playerWeapon}.png`}
            alt='playerWeapon'
          />
        </div>
        <div>
          <p>COMPUTER</p>
          <img
            className='rotated-left'
            src={`images/${computerWeapon}.png`}
            alt='computerWeapon'
          />
        </div>
      </div>
      {result && <PlayAgain />}
    </div>
  );
};

export default GameScreen;
