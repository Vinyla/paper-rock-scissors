import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  playerSelectPaper,
  playerSelectRock,
  playerSelectScissors
} from '../redux/actions/gameActions';

import paper from '../assets/images/paper.png';
import rock from '../assets/images/rock.png';
import scissors from '../assets/images/scissors.png';

const WeaponOptions = () => {

  const dispatch = useDispatch();

  return (
    <div className='weapons-container'>
      <div className='weapons'>
        <Link to='/game'>
          <img
            onClick={() => dispatch(playerSelectPaper())}
            src={paper}
            alt='paper'
          />
        </Link>
        <Link to='/game'>
          <img
            onClick={() => dispatch(playerSelectRock())}
            src={rock}
            alt='rock'
          />
        </Link>
        <Link to='/game'>
          <img
            onClick={() => dispatch(playerSelectScissors())}
            src={scissors}
            alt='scissors'
          />
        </Link>
      </div>
      <h1>Choose your weapon!</h1>
    </div>
  );
};

export default WeaponOptions;
