import React from "react";
import { Link } from "react-router-dom";

class TeaItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/teas/${this.props.tea.id}`}><img className="teas-index-img" src={this.props.tea.image} /></Link>
        <p className="teas-index-name">{this.props.tea.name}</p>
      </div>
    )
  }
}

export default TeaItem;