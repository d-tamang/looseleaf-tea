import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchTea } from '../../actions/tea_actions';
import CartItemIndex from './cart_item_index';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    fetchTea: teaId => dispatch(fetchTea(teaId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndex);