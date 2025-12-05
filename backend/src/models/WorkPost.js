import mongoose from 'mongoose';

const workPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  workType: { type: String, required: true }, // category like construction, carpenter, etc.
  location: { type: String, required: true },
  numberOfWorkers: { type: Number, required: true, default: 1 },
  budget: { type: Number },
  deadline: { type: Date },
  status: {
    type: String,
    enum: ['open', 'in_progress', 'completed', 'cancelled'],
    default: 'open'
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedLabors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  applicants: [{
    labor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    appliedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
  }],
}, { timestamps: true });

// Index for filtering by workType and location
workPostSchema.index({ workType: 1, location: 1, status: 1 });

export default mongoose.model('WorkPost', workPostSchema);
