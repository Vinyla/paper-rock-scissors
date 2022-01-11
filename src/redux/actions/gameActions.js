export const playerSelectPaper = () => {
  return {
    type: 'PAPER',
    payload: 'paper'
  };
};

export const playerSelectRock = () => {
  return {
    type: 'ROCK',
    payload: 'rock'
  };
};

export const playerSelectScissors = () => {
  return {
    type: 'SCISSORS',
    payload: 'scissors'
  };
};

export const computerRandomPick = (computerWeapon) => {
  return {
    type: 'COMPUTER_RANDOM_PICK',
    payload: computerWeapon
  };
};

export const playerWin = () => {
  return {
    type: 'WIN'
  };
};

export const playerLose = () => {
  return {
    type: 'LOSE'
  };
};

export const setTie = () => {
  return {
    type: 'TIE'
  };
};

export const resetChoice = () => {
  return {
    type: 'RESET_GAME'
  };
};

export const getScoreFromLocalStorage = () => {
  return {
    type: 'GET_SCORE'
  };
};

export const getWeaponFromLocalStorage = () => {
  return {
    type: 'GET_WEAPON'
  };
};

export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  };
};

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  };
};
