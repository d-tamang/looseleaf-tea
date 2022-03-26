import React from 'react';
import CartItem from './cart_item';

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchTeas();
  }

  render() {
    if (!this.props.cartItems) return null;
    let usersCart = [];
    for (let cartItem of this.props.cartItems) {
      if (cartItem.userId === this.props.currentUser.id) {
        usersCart.push(cartItem);
      }
    }
    const cartItems = usersCart.map(cartItem => (
      <div><CartItem key={cartItem.id} cartItem={cartItem} teas={this.props.teas} deleteCartItem={this.props.deleteCartItem}/></div>
    ));

    return (
      <div>
        {cartItems}
        <div>Tax included and shipping calculated at checkout</div>
        <button>CHECKOUT</button>
      </div>
    )
  }
}

export default CartItemIndex;