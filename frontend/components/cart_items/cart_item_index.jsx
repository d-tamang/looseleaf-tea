import React from 'react';
import CartItem from './cart_item';

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  render() {
    const cartItems = this.props.cartItems.map(cartItem => (
      <CartItem key={cartItem.id} cartItem={cartItem} fetchTea={this.props.fetchTea} />
    ));

    return (
      <div>
        {cartItems}
      </div>
    )
  }
}

export default CartItemIndex;