import { RECEIVE_TEAS, RECEIVE_TEA } from '../actions/tea_actions';
import { RECEIVE_CART_ITEMS } from '../actions/cart_item_actions';
import { REMOVE_REVIEW } from '../actions/review_actions';

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_TEAS:
      return action.teas;
    case RECEIVE_TEA:
      newState[action.payload.tea.id] = action.payload.tea;
      return newState;
    case RECEIVE_CART_ITEMS:
      return Object.assign({}, state, action.payload.teas);
    default:
      return state;
  }
};

export default teasReducer;