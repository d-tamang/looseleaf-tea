import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      title: this.props.review.title,
      body: this.props.review.body,
      rating: this.props.review.rating,
      userId: this.props.review.userId,
      teaId: this.props.review.teaId
    // review: {
    //   id: parseInt(ownProps.match.params.reviewId),
    //   title: "",
    //   body: "",
    //   rating: 0,
    //   userId: state.session.id,
    //   teaId: parseInt(ownProps.match.params.teaId)
    // },
    }
  }

  componentDidMount() {
    this.props.fetchReview(this.props.review.id);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editReview(this.state).then(() => {this.props.history.push(`/teas/${this.props.review.teaId}`)});
  }

  renderErrors() {
    if (!this.props.errors) return;
    return (
      <div>
        {this.props.errors.map((error, i) => (
          <p key={i} className="review-errors">{error}</p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="edit-review-box">
        <div className="review-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
            <span className="select-rating">Select Rating</span>
              <select onChange={this.update("rating")} >
                <option type="radio" value="1" onChange={this.update("rating")}>1</option>
                <option type="radio" value="2" onChange={this.update("rating")}>2</option>
                <option type="radio" value="3" onChange={this.update("rating")}>3</option>
                <option type="radio" value="4" onChange={this.update("rating")}>4</option>
                <option type="radio" value="5" onChange={this.update("rating")}>5</option>
              </select>
            </div>
            <div className="review-title-box"><textarea className="review-form-title" type="text" value={this.state.title} onChange={this.update("title")}></textarea></div>
            <div className="review-body-box"><textarea className="review-form-body" value={this.state.body} onChange={this.update("body")}></textarea></div>
            <div><button className="review-form-button">EDIT REVIEW</button></div>
            {this.renderErrors()}
          </form>
        </div>
      </div>
    )
  }
}

export default EditReviewForm;