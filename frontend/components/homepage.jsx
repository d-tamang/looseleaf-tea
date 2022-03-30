import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="homepage">
        <div className="first-component-box">
          <div className="first-component">
            <div className="first-component-text">
              <div className="text-line">Tea, made for you</div>
              <div>Visit our Tea Bar to customize your own blends</div>
              <div><button id="shop-teas-button"><Link to="/teas">SHOP ALL TEAS</Link></button></div>
            </div>
          </div>
        </div>
        <div className="second-component-box">
          <div className="second-component">
            <div className="second-component-text">
              <div className="text-line">Afternoon Tea</div>
              <div>Enjoy afternoon tea service with sandwiches, scones, and daily pastries</div>
              <div><button id="menu-button"><Link to="/menu">MENU</Link></button></div>
            </div>
          </div>
        </div>
        <div className="third-component">
          <div>
            <div className="third-component-text">Responsibly Sourced</div>
            <div>Our ingredients and teas are farm to table</div>
          </div>
          <div>
            <div className="third-component-text">Premium, Curated Flavor</div>
            <div>We've traveled the world to find the best flavors</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;