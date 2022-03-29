import React from 'react';
import ReviewForm from './review_form';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  removeReview(e, reviewId) {
    e.preventDefault()
    this.props.deleteReview(reviewId);
  }

  showReviews() {
    let teasReviews = [];
    if (this.props.reviews) {
      teasReviews.push(this.props.reviews);
    }

    if (teasReviews[0].length === 0) {
      return <div id="no-reviews">This item does not have any reviews yet.</div>
    } else {
      return teasReviews[0].map(review => {
        const date = new Date(Date.parse(review.createdAt));
        return <div className="posted-reviews">
          <div>{review.rating}/5</div>
          <div id="posted-review-title">{review.title}</div>
          <div id="posted-review-body">{review.body}</div>
          <div>{date.toDateString().slice(4)}</div>
          {this.props.currentUser.id === review.userId ? <div>
            <Link to={`/teas/${this.props.tea.id}/reviews/${review.id}/edit`}><button className="review-icon-box"><img className="review-button-icon" src="images/editicon.png"/></button></Link>
            <button className="review-icon-box" onClick={(e) => this.removeReview(e, review.id)}><img className="review-button-icon" src="images/deleteicon.png"/></button>
          </div> : <div id="hidden-review-div"></div>}
        </div>
      })
    }
  }

  render() {
    if (!this.props.tea) return null;
    return (
      <div>
        <div id="reviews-header">Reviews</div>
        <div className="reviews-box">
          <div>
            <ReviewForm
              currentUser={this.props.currentUser}
              tea={this.props.tea}
              createReview={this.props.createReview}
            />
          </div>
          <div>{this.showReviews()}</div>
        </div>
      </div>
    )
  }
}

export default ReviewIndex;