import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReview = (reviewId) => dispatch => (
  APIUtil.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = (review) => dispatch => (
  APIUtil.createReview(review)
    .then(createdReview => dispatch(receiveReview(createdReview)))
);

export const editReview = (review) => dispatch => (
  APIUtil.updateReview(review)
    .then(updatedReview => dispatch(receiveReview(updatedReview)))
);

export const deleteReview = (reviewId) => dispatch => (
  APIUtil.deleteReview(reviewId)
    .then(review => dispatch(removeReview(review)))
);