import React from "react";

class TeaItemShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      category: "",
      price: 0,
      size: "",
      photoUrl: ""
    }
  }

  componentDidMount() {
    this.props.fetchTea(this.props.match.params.teaId);
  }

  render() {
    if (!this.props.tea) return null;
    return (
      <div className="tea-show-container">
        <div className="tea-show-left">
          <img id="tea-show-img" src={this.props.tea.photoUrl}></img>
          <img id="brewing-guide" src="images/brewingguide.png"></img>
        </div>
        <div className="tea-show-right">
          <div className="inner-right">
            <div id="tea-show-name">{this.props.tea.name}</div>
            <div id="tea-show-price">{`$${this.props.tea.price}`}</div>
            <div>
              <p id="tea-show-size">SIZE</p>
              <button className="size-button">Small</button>
              <button className="size-button">Large</button>
            </div>
            <br />
            <div><button id="add-to-cart">ADD TO CART</button></div>
            <div id="tea-description">{this.props.tea.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeaItemShow;