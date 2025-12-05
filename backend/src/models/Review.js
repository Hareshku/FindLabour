import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  workPost: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkPost', required: true },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  reviewerRole: { type: String, enum: ['customer', 'labor'], required: true },
}, { timestamps: true });

// Prevent duplicate reviews for same work post
reviewSchema.index({ workPost: 1, reviewer: 1, reviewee: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
