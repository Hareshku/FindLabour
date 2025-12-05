import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  location: { type: String, required: true },
  profileImage: { type: String, default: '' },
  role: { type: String, enum: ['customer', 'labor', 'admin'], required: true },

  // Labor specific fields
  experience: { type: Number }, // years of experience
  age: { type: Number },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  workTypes: [{ type: String }], // categories labor can work in
  bio: { type: String },
  isAvailable: { type: Boolean, default: true },

  // Rating & Reviews
  averageRating: { type: Number, default: 0 },
  totalReviews: { type: Number, default: 0 },

  isVerified: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
