import Review from '../models/Review.js';
import User from '../models/User.js';

export const createReview = async (reviewData) => {
  const review = new Review(reviewData);
  await review.save();

  // Update reviewee's average rating
  const reviews = await Review.find({ reviewee: reviewData.reviewee });
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  await User.findByIdAndUpdate(reviewData.reviewee, {
    averageRating: Math.round(avgRating * 10) / 10,
    totalReviews: reviews.length,
  });

  return review;
};

export const getReviewsForUser = async (userId) => {
  return await Review.find({ reviewee: userId })
    .populate('reviewer', 'username profileImage role')
    .populate('workPost', 'title')
    .sort({ createdAt: -1 });
};
