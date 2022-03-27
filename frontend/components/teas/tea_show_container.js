import { connect } from 'react-redux';
import { fetchTea } from '../../actions/tea_actions';
import TeaItemShow from './tea_item_show';
import { createCartItem } from '../../actions/cart_item_actions';
import { createReview, editReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    tea: state.entities.teas[ownProps.match.params.teaId],
    reviews: Object.values(state.entities.reviews)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTea: teaId => dispatch(fetchTea(teaId)),
    createCartItem: (userId, teaId, price, size) => dispatch(createCartItem(userId, teaId, price, size)),
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaItemShow);