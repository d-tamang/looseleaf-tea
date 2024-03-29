import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW, CLEAR_REVIEW_ERRORS } from "../actions/review_actions"

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case RECEIVE_REVIEW:
      return [];
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

export default reviewErrorsReducer;