import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTie, playerWin, playerLose } from '../redux/actions/gameActions';

const ResultMessage = () => {
  const result = useSelector((state) => state.results.result);
  const playerWeapon = useSelector((state) => state.player.playerWeapon);
  const computerWeapon = useSelector((state) => state.computer);

  const dispatch = useDispatch();

  const getResult = () => {
    if (playerWeapon === 'rock' && computerWeapon === 'scissors') {
      dispatch(playerWin());
    } else if (playerWeapon === 'rock' && computerWeapon === 'paper') {
      dispatch(playerLose());
    } else if (playerWeapon === 'scissors' && computerWeapon === 'paper') {
      dispatch(playerWin());
    } else if (playerWeapon === 'scissors' && computerWeapon === 'rock') {
      dispatch(playerLose());
    } else if (playerWeapon === 'paper' && computerWeapon === 'rock') {
      dispatch(playerWin());
    } else if (playerWeapon === 'paper' && computerWeapon === 'scissors') {
      dispatch(playerLose());
    } else dispatch(setTie());
  };

  useEffect(() => {
    getResult();
  }, [computerWeapon]);

  return (
    <div className='message-container'>
      <h1>{result}</h1>
      {result === 'YOU WIN!' && (
        <p>
          {playerWeapon} beats&nbsp;
          {computerWeapon}!
        </p>
      )}
      {result === 'YOU LOSE!' && (
        <p>
          {computerWeapon} beats&nbsp;
          {playerWeapon}!
        </p>
      )}
    </div>
  );
};

export default ResultMessage;
