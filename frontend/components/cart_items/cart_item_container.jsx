import { connect } from 'react-redux';
import { fetchCartItems, updateCartItem, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchTeas } from '../../actions/tea_actions';
import CartItem from './cart_item';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems),
    teas: state.entities.teas
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCartItem: (cartItem, quantity) => dispatch(updateCartItem(cartItem, quantity)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    fetchTeas: () => dispatch(fetchTeas())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);