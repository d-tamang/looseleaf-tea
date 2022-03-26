import React from "react";

class TeaItemShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      category: "",
      price: 0,
      size: ""
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchTea(this.props.match.params.teaId);
  }

  setSize(size) {
    if (this.state.price === 0) {
      this.setState({ id: this.props.tea.id });
      this.setState({ name: this.props.tea.name });
      this.setState({ category: this.props.tea.category });
      this.setState({ size: size });
    } else {
      this.setState({ size: size })
    }

    if (size === "Small") {
      this.setState({ price: 15 });
    } else {
      this.setState({ price: 25 });
    }
  }

  showPrice() {
    if (this.state.price === 0) {
      return 15;
    } else {
      return this.state.price;
    }
  }

  showButton() {
    if (this.state.price === 0) {
      return <button id="select-a-size">SELECT A SIZE</button>
    } else {
      return <button onClick={(e) => this.addToCart(e)} id="add-to-cart">ADD TO CART</button>
    }
  }

  addToCart(e) {
    e.preventDefault();
    this.props.createCartItem(this.props.currentUser.id, this.props.tea.id, this.state.price, this.state.size);
    document.getElementById("nav-cart-id").style.width = "50%";
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
            <div id="tea-show-price">{`$${this.showPrice()}`}</div>
            <div>
              <p id="tea-show-size">SIZE</p>
              <button className="size-button" onClick={() => this.setSize('Small')}>Small</button>
              <button className="size-button" onClick={() => this.setSize('Large')}>Large</button>
            </div>
            <br />
            <div>{this.showButton()}</div>
            <div id="tea-description">{this.props.tea.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeaItemShow;