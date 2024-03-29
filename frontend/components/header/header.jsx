import React from "react";
import { NavLink } from "react-router-dom";
import CartItemContainer from "../cart_items/cart_item_container";
import SearchBar from './searchbar';

class Header extends React.Component {
  openCart() {
    document.getElementById("nav-cart-id").style.width = "50%";
  }

  closeCart(e) {
    e.preventDefault();
    document.getElementById("nav-cart-id").style.width = "0";
  }

  openSearch() {
    document.getElementById("nav-search-id").style.width = "50%";
  }

  closeSearch(e) {
    e.preventDefault();
    document.getElementById("nav-search-id").style.width = "0";
  }

  showCartNav() {
    if (this.props.currentUser && this.props.cartItems.length) {
      let numItems = 0;
      for (let cartItem of this.props.cartItems) {
        if (cartItem.userId === this.props.currentUser.id) {
          numItems += cartItem.quantity;
        }
      }
      return <div className="nav-link" onClick={this.openCart}><img id="cart-icon" src="images/cart.png" />Cart - {numItems}</div>
    }
    return <div className="nav-link" onClick={this.openCart}><img id="cart-icon" src="images/cart.png" />Cart</div>
  }

  render() {
    let accountLink;
    if (this.props.currentUser) {
      accountLink = <NavLink className="nav-link" exact to="/account"><img id="account-icon" src="images/account.png" />Account</NavLink>;
    } else {
      accountLink = <NavLink className="nav-link" exact to="/account/register"><img id="account-icon" src="images/account.png" />Account</NavLink>
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
          <div className="nav-link" onClick={this.openSearch}><img id="search-icon" src="images/searchicon.png" />Search</div>
          <div>{accountLink}</div>
          {this.showCartNav()}
        </div>
        <div className="nav-search" id="nav-search-id">
          <div className="inner-search">
            <button id="close-search-x" onClick={this.closeSearch}><img id="close-search-icon" src="images/closeicon.png" /></button>
            <SearchBar teas={this.props.teas} fetchTeas={this.props.fetchTeas} />
          </div>
        </div>
        <div className="nav-cart" id="nav-cart-id">
          <div className="inner-cart">
            <button id="close-cart-x" onClick={this.closeCart}><img id="close-cart-icon" src="images/closeicon.png" /></button>
            <CartItemContainer />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;