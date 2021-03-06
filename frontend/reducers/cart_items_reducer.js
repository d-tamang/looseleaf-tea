import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart_item_actions';

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      if (action.payload.cartItems) {
        return action.payload.cartItems
      } else {
        return newState;
      }
    case RECEIVE_CART_ITEM:
      if (action.cartItem) {
        newState[action.cartItem.id] = action.cartItem;
        return newState;
      } else {
        return newState;
      }
    case REMOVE_CART_ITEM:
      delete newState[action.cartItem.id]
      return newState;
    default:
      return state;
  }
};

export default cartItemsReducer;