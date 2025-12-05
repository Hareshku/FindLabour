import * as reviewService from '../services/reviewService.js';

export const createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview({
      ...req.body,
      reviewer: req.user._id,
      reviewerRole: req.user.role,
    });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewsForUser = async (req, res) => {
  try {
    const reviews = await reviewService.getReviewsForUser(req.params.userId);
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
