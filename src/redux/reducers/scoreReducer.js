const initialState = {
  score: 0
};

export const setScore = (state = initialState, action) => {
  switch (action.type) {
    case 'WIN':
      return {
        ...state,
        score: ++state.score
      };
    case 'LOSE':
      return {
        ...state,
        score: --state.score
      };
    case 'GET_SCORE':
      return {
        score: state.score
      };
    default:
      return state;
  }
};
