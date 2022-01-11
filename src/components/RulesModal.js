import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/actions/gameActions';

const RulesModal = () => {
  const dispatch = useDispatch();

  const setModalNotVisible = (e) => {
    e.preventDefault();
    dispatch(closeModal());
  };
  
  return (
    <div className='modal'>
      <h2>Game Rules</h2>
      <button className='close' onClick={setModalNotVisible}>X</button>
      <p>
        Rock breaks scissors and therefore rock wins over scissors. Rock loses
        against paper.
      </p>
      <p>
        Scissors cut paper therefore scissors wins over paper. Scissors lose
        against rock
      </p>
      <p>
        Ppaer covers rock therefore paper wins over rock. Paper loses against
        scissors.
      </p>
      <p>If the player and computer make the same selection, there is a tie.</p>
    </div>
  );
};

export default RulesModal;
