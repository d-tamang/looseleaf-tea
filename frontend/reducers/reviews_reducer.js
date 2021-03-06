import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_TEA } from '../actions/tea_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_TEA:
      if (action.payload.reviews) {
        return action.payload.reviews;
      } else {
        return newState;
      }
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.review.id]
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;