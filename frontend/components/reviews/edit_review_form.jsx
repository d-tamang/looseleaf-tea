import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
  }

  componentDidMount() {
    this.props.fetchReview(this.state.id);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editReview(this.state);
    return this.props.history.push(`/teas/${this.props.review.teaId}`);
    //review IS editing, but only on refresh back at the tea page
  }

  render() {
    return (
      <div className="edit-review-box">
        <form onSubmit={(e) => this.handleSubmit(e)}>
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
          <button>EDIT REVIEW</button>
        </form>
      </div>
    )
  }
}

export default EditReviewForm;