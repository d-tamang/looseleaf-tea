import React from 'react';
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      rating: 0,
      user_id: this.props.currentUser ? this.props.currentUser.id : '',
      tea_id: this.props.tea.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) return this.props.history.push('/account/login');
    this.props.createReview(this.state);
    this.setState({
      title: "",
      body: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.update("rating")} >
            <option defaultValue={null}>Select Rating</option>
            <option type="radio" value="1" onChange={this.update("rating")}>1</option>
            <option type="radio" value="2" onChange={this.update("rating")}>2</option>
            <option type="radio" value="3" onChange={this.update("rating")}>3</option>
            <option type="radio" value="4" onChange={this.update("rating")}>4</option>
            <option type="radio" value="5" onChange={this.update("rating")}>5</option>
          </select>
          <br />
          <input type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"></input>
          <br />
          <input type="text" value={this.state.body} onChange={this.update("body")} placeholder="Write review here"></input>
          <br />
          <button>ADD REVIEW</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ReviewForm);