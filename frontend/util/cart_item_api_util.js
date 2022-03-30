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

export const createCartItem = (userId, teaId, quantity, price, size) => (
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cart_item: {
      user_id: userId,
      tea_id: teaId,
      quantity: quantity,
      price: price,
      size: size
    } }
  })
);

export const updateCartItem = (cartItem, quantity) => {
  let id = cartItem.id
  return $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { 
      id,
      quantity
    }
  })
}

export const deleteCartItem = (cartItemId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartItemId}`
  })
);