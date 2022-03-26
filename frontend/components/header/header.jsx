import React from "react";
import { NavLink } from "react-router-dom";
import CartItemContainer from "../cart_items/cart_item_container";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  openCart() {
    document.getElementById("nav-cart-id").style.width = "50%";
  }

  closeCart(e) {
    e.preventDefault();
    document.getElementById("nav-cart-id").style.width = "0";
  }

  render() {
    let accountLink;
    if (this.props.currentUser) {
      accountLink = <NavLink className="nav-link" exact to="/account"><img id="account-img" src="images/account.png" />Account</NavLink>;
    } else {
      accountLink = <NavLink className="nav-link" exact to="/account/register"><img id="account-img" src="images/account.png" />Account</NavLink>
    }
    return (
      <header className="nav-bar">
        <div className="left-nav">
          <div><NavLink className="nav-link" exact to="/teas/black">Black</NavLink></div>
          <div><NavLink className="nav-link" exact to="/teas/green">Green</NavLink></div>
          <div><NavLink className="nav-link" exact to="/teas/herbal">Herbal</NavLink></div>
          <div><NavLink className="nav-link" exact to="/menu">Menu</NavLink></div>
        </div>
        <div id="logo">
          <NavLink exact to="/"><img id="logo-img" src="images/leaf.png" />LooseLeaf Tea Co.</NavLink>
        </div>
        <div className="right-nav">
          <div>{accountLink}</div>
          <div className="nav-link" onClick={this.openCart}><img id="cart-img" src="images/cart.png" />Cart</div>
        </div>
        <div className="nav-cart" id="nav-cart-id">
          <button onClick={this.closeCart}>X</button>
          <CartItemContainer />
        </div>
      </header>
    )
  }
}

export default Header;