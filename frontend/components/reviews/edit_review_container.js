import { connect } from 'react-redux';
import { fetchReview, editReview } from '../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    review: {
      id: parseInt(ownProps.match.params.reviewId),
      title: "",
      body: "",
      rating: 0,
      userId: state.session.id,
      teaId: parseInt(ownProps.match.params.id)
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    editReview: review => dispatch(editReview(review))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);