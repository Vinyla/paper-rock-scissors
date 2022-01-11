import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const scoreFromStorage = localStorage.getItem('score')
  ? JSON.parse(localStorage.getItem('score'))
  : 0;

const weaponFromStorage = (localStorage.getItem('playerWeapon'))

const initialState = {
  score: {
    score: scoreFromStorage
  },
  player: {
    playerWeapon: weaponFromStorage
  }
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
