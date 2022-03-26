import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tea = this.props.teas[this.props.cartItem.teaId - 1];
    const cartItem = this.props.cartItem;
    
    return (
      <div className="cart-tea-item">
        <div><img id="cart-tea-image" src={tea.photoUrl} /></div>
        <div>
          <div>{tea.name}</div>
          <div>{cartItem.size}</div>
          <div>{cartItem.price}</div>
        </div>
      </div>
    )
  }
}

export default CartItem;