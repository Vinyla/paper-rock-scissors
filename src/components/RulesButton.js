import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/actions/gameActions';

const RulesButton = () => {
  const dispatch = useDispatch();

  const setModaLVisible = (e) => {
    e.preventDefault();
    dispatch(openModal());
  };

  return (
    <button className='button' onClick={setModaLVisible}>
      Rules
    </button>
  );
};

export default RulesButton;
