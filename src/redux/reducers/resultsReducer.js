const initialState = {
  result: ''
};

export const resultMessage = (state = initialState, action) => {
  switch (action.type) {
    case 'WIN':
      return {
        ...state,
        result: 'YOU WIN!'
      };
    case 'LOSE':
      return {
        ...state,
        result: 'YOU LOSE!'
      };
    case 'TIE':
      return {
        ...state,
        result: 'TIE!'
      };
    default:
      return state;
  }
};
