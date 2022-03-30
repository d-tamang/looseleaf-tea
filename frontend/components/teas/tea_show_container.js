import { connect } from 'react-redux';
import { fetchTea } from '../../actions/tea_actions';
import TeaItemShow from './tea_item_show';
import { fetchCartItems, createCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { createReview, editReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    tea: state.entities.teas[ownProps.match.params.teaId],
    cartItems: Object.values(state.entities.cartItems),
    reviews: Object.values(state.entities.reviews),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTea: teaId => dispatch(fetchTea(teaId)),
    fetchCartItems: () => dispatch(fetchCartItems()),
    createCartItem: (userId, teaId, quantity, price, size) => dispatch(createCartItem(userId, teaId, quantity, price, size)),
    updateCartItem: (cartItem, quantity) => dispatch(updateCartItem(cartItem, quantity)),
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaItemShow);