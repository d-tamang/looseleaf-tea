import * as APIUtil from "../util/cart_item_api_util";

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

const receiveCartItems = (payload) => ({
  type: RECEIVE_CART_ITEMS,
  payload
});

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = (cartItem) => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

export const fetchCartItems = () => dispatch => (
  APIUtil.fetchCartItems()
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
);

export const fetchCartItem = cartItemId => dispatch => (
  APIUtil.fetchCartItem(cartItemId)
    .then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const createCartItem = (userId, teaId, quantity, price, size) => dispatch => (
  APIUtil.createCartItem(userId, teaId, quantity, price, size).then(cartItem => dispatch(receiveCartItem(cartItem)))
);

export const updateCartItem = (cartItem, quantity) => dispatch => (
  APIUtil.updateCartItem(cartItem, quantity)
      .then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = cartItemId => dispatch => (
  APIUtil.deleteCartItem(cartItemId)
    .then(cartItem => dispatch(removeCartItem(cartItem)))
);