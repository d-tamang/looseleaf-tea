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

    if (teasReviews.length === 0) {
      return <div>This item does not have any reviews yet.</div>
    } else {
      return teasReviews[0].map(review => {
        const date = new Date(Date.parse(review.createdAt));
        return <div>
          <div>{review.title}</div>
          <div>{review.body}</div>
          <div>{date.toDateString().slice(4)}</div>
          {this.props.currentUser.id === review.userId ? <div>
            <Link to={`/teas/${this.props.tea.id}/reviews/${review.id}/edit`}><button>EDIT REVIEW</button></Link>
            <button onClick={(e) => this.removeReview(e, review.id)}>DELETE REVIEW</button>
            </div> : <div id="hidden-review-div"></div>}
        </div>
      })
    }
  }

  render() {
    if (!this.props.tea) return null;
    return (
      <div>
        <div>Leave a Review!</div>
        <div>
          <ReviewForm
            currentUser={this.props.currentUser}
            tea={this.props.tea}
            createReview={this.props.createReview}
          />
        </div>
        <div>{this.showReviews()}</div>
      </div>
    )
  }
}

export default ReviewIndex;