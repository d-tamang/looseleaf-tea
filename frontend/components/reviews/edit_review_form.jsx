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
        <div className="review-form">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <select onChange={this.update("rating")} >
                <option defaultValue={null}>Select Rating</option>
                <option type="radio" value="1" onChange={this.update("rating")}>1/5</option>
                <option type="radio" value="2" onChange={this.update("rating")}>2/5</option>
                <option type="radio" value="3" onChange={this.update("rating")}>3/5</option>
                <option type="radio" value="4" onChange={this.update("rating")}>4/5</option>
                <option type="radio" value="5" onChange={this.update("rating")}>5/5</option>
              </select>
            </div>
            <div className="review-title-box"><textarea className="review-form-title" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title"></textarea></div>
            <div className="review-body-box"><textarea className="review-form-body" value={this.state.body} onChange={this.update("body")} placeholder="Write review here"></textarea></div>
            <div><button className="review-form-button">EDIT REVIEW</button></div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditReviewForm;