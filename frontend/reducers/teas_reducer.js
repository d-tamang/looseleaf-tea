import { RECEIVE_TEAS, RECEIVE_TEA } from '../actions/tea_actions';

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_TEAS:
      return action.teas;
    case RECEIVE_TEA:
      newState[action.tea.id] = action.tea;
      return newState;
    default:
      return state;
  }
};

export default teasReducer;