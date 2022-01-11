import { combineReducers } from 'redux';
import { playerWeaponChoice } from './playerWeaponChoice';
import { computerWeaponChoice } from './computerWeaponChoice';
import { resultMessage } from './resultsReducer';
import { setScore } from './scoreReducer';
import { toggleModal } from './modalReducer';

const reducers = combineReducers({
  player: playerWeaponChoice,
  computer: computerWeaponChoice,
  results: resultMessage,
  score: setScore,
  modal: toggleModal
});

export default reducers;
