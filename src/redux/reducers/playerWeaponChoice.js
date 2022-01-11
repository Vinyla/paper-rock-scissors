const initialState = {
  playerWeapon: ''
};

export const playerWeaponChoice = (state = initialState, action) => {
  switch (action.type) {
    case 'PAPER':
      return {
        ...state,
        playerWeapon: action.payload
      };
    case 'ROCK':
      return {
        ...state,
        playerWeapon: action.payload
      };
    case 'SCISSORS':
      return {
        ...state,
        playerWeapon: action.payload
      };
    case 'GET_WEAPON':
      return {
        ...state,
        playerWeapon: state.playerWeapon
      };
    default:
      return state;
  }
};
