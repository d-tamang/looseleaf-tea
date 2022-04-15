import React from "react";
import ReviewIndex from "../reviews/review_index";

class TeaItemShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      category: "",
      price: 0,
      size: "",
      quantity: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchTea(this.props.match.params.teaId);
    this.props.fetchCartItems();
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
    if (!this.props.currentUser) return this.props.history.push('/account/login');
    for (let cartItem of this.props.cartItems) {
      if (cartItem.teaId === this.props.tea.id && cartItem.userId === this.props.currentUser.id && cartItem.size === this.state.size) {
        let newQuantity = this.state.quantity + cartItem.quantity;
        this.props.updateCartItem(cartItem, newQuantity);
        document.getElementById("nav-cart-id").style.width = "45%";
        return;
      }
    }
    this.props.createCartItem(this.props.currentUser.id, this.props.tea.id, this.state.quantity, this.state.price, this.state.size);
    document.getElementById("nav-cart-id").style.width = "45%";
  }

  render() {
    const tea = this.props.tea;
    if (!tea) return null;
    return (
      <div>
        <div className="tea-show-container">
          <div className="tea-show-left">
            <img id="tea-show-img" src={tea.image}></img>
            <img id="brewing-guide" src="images/brewingguide.png"></img>
          </div>
          <div className="tea-show-right">
            <div className="inner-right">
              <div id="tea-show-name">{tea.name}</div>
              <div id="tea-show-price">{`$${this.showPrice()}`}</div>
              <div>
                <p id="tea-show-size">SIZE</p>
                <button className="size-button" onClick={() => this.setSize('Small')}>Small</button>
                <button className="size-button" onClick={() => this.setSize('Large')}>Large</button>
              </div>
              <br />
              <div>{this.showButton()}</div>
              <div id="tea-description">{tea.description}</div>
            </div>
          </div>
        </div>
        <ReviewIndex
          currentUser={this.props.currentUser}
          tea={tea}
          createReview={this.props.createReview}
          editReview={this.props.editReview}
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
          errors={this.props.errors}
          clearErrors={this.props.clearErrors}
        />
      </div>
    )
  }
}

export default TeaItemShow;