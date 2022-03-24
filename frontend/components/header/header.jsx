import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
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
          <div><img id="cart-img" src="images/cart.png" />Cart</div>
        </div>
      </header>
    )
  }
}

export default Header;