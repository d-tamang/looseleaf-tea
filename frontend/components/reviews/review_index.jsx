import React from 'react';
import ReviewForm from './review_form';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  removeReview(e, reviewId) {
    e.preventDefault()
    this.props.deleteReview(reviewId);
  }

  showStars(review) {
    let stars = review.rating;
    if (stars === 1) {
      return <div>
        <img className="star" src="images/star.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
      </div>
    } else if (stars === 2) {
      return <div>
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
      </div>
    } else if (stars === 3) {
      return <div>
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star-empty" src="images/star2.png" />
        <img className="star-empty" src="images/star2.png" />
      </div>
    } else if (stars === 4) {
      return <div>
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star-empty" src="images/star2.png" />
      </div>
    } else if (stars === 5) {
      return <div>
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
        <img className="star" src="images/star.png" />
      </div>
    }
  }

  showReviews() {
    debugger
    if (this.props.reviews.length === 0) {
      return <div id="no-reviews">Be the first to leave a review!</div>
    } else {
      return this.props.reviews.map((review, i) => {
        const date = new Date(Date.parse(review.createdAt));
        return <div key={review.rating + i} className="posted-reviews">
          {this.showStars(review)}
          <div id="posted-review-title">{review.title}</div>
          <div id="posted-review-body">{review.body}</div>
          <div id="posted-review-name">{review.name}</div>
          <div>{date.toDateString().slice(4)}</div>
          {this.props.currentUser.id === review.userId ? <div>
            <Link to={`/teas/${this.props.tea.id}/reviews/${review.id}/edit`}><button className="review-icon-box"><img className="review-button-icon" src="images/editicon.png" /></button></Link>
            <button className="review-icon-box" onClick={(e) => this.removeReview(e, review.id)}><img className="review-button-icon" src="images/deleteicon.png" /></button>
          </div> : <div id="hidden-review-div"></div>}
        </div>
      })
    }
  }

  render() {
    if (!this.props.tea) return null;
    return (
      <div className="reviews-index-box">
        <div id="reviews-header">Tea-views (Reviews)</div>
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