import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  readAt: { type: Date },
}, { timestamps: true });

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  workPost: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkPost' },
  messages: [messageSchema],
  lastMessage: { type: Date },
}, { timestamps: true });

chatSchema.index({ participants: 1 });

export default mongoose.model('Chat', chatSchema);
