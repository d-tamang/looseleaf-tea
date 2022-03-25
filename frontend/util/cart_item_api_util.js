export const fetchCartItems = () => {
  return $.ajax({
      method: "GET",
      url: "/api/cart_items"
  })
};

export const fetchCartItem = (cartItemId) => {
  return $.ajax({
      method: "GET",
      url: `/api/cart_items/${cartItemId}`
  })
};

export const createCartItem = (userId, teaId) => (
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cartItemId: {
      userId: userId,
      teaId: teaId
    } }
  })
);

export const deleteCartItem = (cartItemId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`
  })
);