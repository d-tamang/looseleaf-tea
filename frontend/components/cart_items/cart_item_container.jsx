import { connect } from 'react-redux';
import { fetchCartItems, deleteCartItem } from '../../actions/cart_item_actions';
import { fetchTeas } from '../../actions/tea_actions';
import CartItem from './cart_item';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    cartItems: Object.values(state.entities.cartItems),
    teas: Object.values(state.entities.teas)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    fetchTeas: () => dispatch(fetchTeas())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);