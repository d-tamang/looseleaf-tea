import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.subtotal = 0;
  }

  componentDidMount() {
    this.props.fetchCartItems();
    this.props.fetchTeas();
  }

  showCart(usersCart) {
    this.subtotal = 0;
    return usersCart.map((cartItem, i) => (
      <div key={i} className="cart-tea-item">
        <div id="left-cart">
          <img id="cart-tea-image" src={this.props.teas[cartItem.teaId - 1].photoUrl} />
        </div>
        <div className="right-cart">
          <div>{this.props.teas[cartItem.teaId - 1].name}</div>
          <div>{cartItem.size}</div>
          <div>{`$${cartItem.price}.00`}</div>
          <div id="hidden-subtotal">{this.subtotal += cartItem.price}</div>
          <div><button id="remove-button" onClick={() => this.props.deleteCartItem(cartItem.id)}>Remove</button></div>
        </div>
      </div>
    ))
  }

  openModal(e) {
    e.preventDefault();
    document.getElementsByClassName("checkout-modal")[0].style.display = "block";
  }

  closeModal(e) {
    e.preventDefault();
    document.getElementsByClassName("checkout-modal")[0].style.display = "none";
  }

  render() {
    let usersCart = [];
    for (let cartItem of this.props.cartItems) {
      if (cartItem.userId === this.props.currentUser.id) {
        usersCart.push(cartItem);
      }
    }
    if (usersCart.length === 0) {
      return (
        <div id="empty-cart">Your cart is currently empty.</div>
      )
    } else {
      return (
        <div>
          {this.showCart(usersCart)}
          <div className="post-tea-cart">
            <div className="cart-text">SUBTOTAL</div>
            <div id="subtotal">${this.subtotal}.00</div>
            <div className="cart-text">Tax included and shipping calculated at checkout</div>
            <button onClick={(e) => this.openModal(e)}>CHECK OUT</button>
          </div>
          <div className="checkout-modal">
            <div className="modal-content">
              <button id="checkout-button" onClick={(e) => this.closeModal(e)}><img id="modal-x-icon" src="images/closeicon.png"/></button>
              <p>Thanks for browsing the site!</p>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default CartItem;