import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <Link to="/teas">Shop All Teas</Link>
      </div>
    )
  }
}

export default HomePage;