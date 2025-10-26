import * as React from "react";

import { cx } from "../../utils/cx";

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export interface ReviewsProps extends React.HTMLAttributes<HTMLDivElement> {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}

export const Reviews = React.forwardRef<HTMLDivElement, ReviewsProps>(
  ({ className, reviews, averageRating, totalReviews, ...props }, ref) => {
    const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={cx("review-star", i < rating && "review-star--filled")}>
          ★
        </span>
      ));
    };

    return (
      <div ref={ref} className={cx("reviews", className)} {...props}>
        {(averageRating !== undefined || totalReviews !== undefined) && (
          <div className="reviews-summary">
            {averageRating !== undefined && (
              <div className="reviews-average">
                <span className="reviews-average-score">{averageRating.toFixed(1)}</span>
                <div className="reviews-average-stars">{renderStars(Math.round(averageRating))}</div>
              </div>
            )}
            {totalReviews !== undefined && (
              <div className="reviews-total">Based on {totalReviews} reviews</div>
            )}
          </div>
        )}
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="review-author">
                  <span className="review-author-name">{review.author}</span>
                  {review.verified && <span className="review-verified">Verified Purchase</span>}
                </div>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-rating">{renderStars(review.rating)}</div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
Reviews.displayName = "Reviews";
