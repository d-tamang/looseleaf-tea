import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let accountLink;
    if (this.props.currentUser) {
      accountLink = <NavLink activeClassName="current" className="button" exact to="/account"><img id="account-img" src="images/account.png" />Account</NavLink>;
    } else {
      accountLink = <NavLink activeClassName="current" className="button" exact to="/account/register"><img id="account-img" src="images/account.png" />Account</NavLink>
    }
    return (
      <header className="nav-bar">
        <div className="left-nav">
          <div><NavLink activeClassName="current" className="button" exact to="/teas/black">Black</NavLink></div>
          <div><NavLink activeClassName="current" className="button" exact to="/teas/green">Green</NavLink></div>
          <div><NavLink activeClassName="current" className="button" exact to="/teas/herbal">Herbal</NavLink></div>
          <div id="menu"><NavLink activeClassName="current" className="button" exact to="/menu">Menu</NavLink></div>
        </div>
        <div className="logo">
          <Link to="/"><img id="logo-img" src="images/leaf.png" />LooseLeaf Tea Co.</Link>
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