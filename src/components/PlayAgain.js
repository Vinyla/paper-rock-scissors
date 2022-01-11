import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetChoice } from '../redux/actions/gameActions';

const PlayAgain = () => {
  const modal = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const playMore = () => {
    navigate('/');
    dispatch(resetChoice());
  };

  return (
    <button className='button' disabled={modal} onClick={() => playMore()}>
      Play Again
    </button>
  );
};

export default PlayAgain;
