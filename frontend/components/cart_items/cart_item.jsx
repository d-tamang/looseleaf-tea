import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.subtotal = 0;
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  incrementQuantity(e, cartItem) {
    e.preventDefault;
    let newQuantity = cartItem.quantity + 1;
    this.props.updateCartItem(cartItem, newQuantity);
  }

  decrementQuantity(e, cartItem) {
    e.preventDefault;
    if (cartItem.quantity === 1) {
      this.props.deleteCartItem(cartItem.id);
    } else {
      let newQuantity = cartItem.quantity - 1;
      this.props.updateCartItem(cartItem, newQuantity);
    }
  }

  showCart(usersCart) {
    this.subtotal = 0;
    return usersCart.map((cartItem, i) => (
      <div key={i} className="cart-tea-item">
        <div id="left-cart">
          <img id="cart-tea-image" src={this.props.teas[cartItem.teaId].image} />
        </div>
        <div className="right-cart">
          <div>{this.props.teas[cartItem.teaId].name}</div>
          <div>{cartItem.size}</div>
          <div>{`$${cartItem.price}.00`}</div>
          <div>
            <button className="cart-quantity-btn" onClick={(e) => this.decrementQuantity(e, cartItem)}>
              <img className="cart-quantity-icon" src="images/minusicon.png"/>
            </button>
            {cartItem.quantity}
            <button className="cart-quantity-btn" onClick={(e) => this.incrementQuantity(e, cartItem)}>
              <img className="cart-quantity-icon" src="images/plusicon.png"/>
            </button>
          </div>
          <div id="hidden-subtotal">{this.subtotal += cartItem.price * cartItem.quantity}</div>
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
    if (!this.props.cartItems) return null;
    let usersCart = [];
    for (let cartItem of this.props.cartItems) {
      if (this.props.currentUser && cartItem.userId === this.props.currentUser.id) {
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
          <div id="cart-header">Shopping Cart</div>
          {this.showCart(usersCart)}
          <div className="post-tea-cart">
            <div id="cart-text-subtotal">SUBTOTAL</div>
            <div id="subtotal">${this.subtotal}.00</div>
            <div className="cart-text">Tax included and shipping calculated at checkout</div>
            <button onClick={(e) => this.openModal(e)}>CHECK OUT</button>
          </div>
          <div className="checkout-modal">
            <div className="modal-content">
              <button id="checkout-button" onClick={(e) => this.closeModal(e)}><img id="modal-x-icon" src="images/closeicon.png"/></button>
              <p className="modal-text">Thanks for browsing LooseLeaf Tea Co!</p>
              <br />
              <p>All teas feaured are real and can be purchased at site muse,</p>
              <br />
              <p>www.lelandtea.com</p>
              <br />
              <p className="modal-text">Connect with me at my links below!</p>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default CartItem;