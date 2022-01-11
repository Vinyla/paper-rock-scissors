const initialState = {
  randomWeapon: ''
}

export const computerWeaponChoice = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPUTER_RANDOM_PICK':
      return action.payload;
    case 'RESET_GAME':
      return (state = '');
    default:
      return state;
  }
};
