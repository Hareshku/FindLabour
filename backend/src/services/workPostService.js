import WorkPost from '../models/WorkPost.js';
import User from '../models/User.js';

export const createWorkPost = async (postData) => {
  const post = new WorkPost(postData);
  return await post.save();
};

export const getWorkPosts = async (filters = {}) => {
  const query = { status: 'open' };
  if (filters.workType) query.workType = filters.workType;
  if (filters.location) query.location = new RegExp(filters.location, 'i');

  return await WorkPost.find(query)
    .populate('customer', 'username profileImage location averageRating')
    .sort({ createdAt: -1 });
};

export const getWorkPostById = async (id) => {
  return await WorkPost.findById(id)
    .populate('customer', 'username profileImage location mobileNumber averageRating totalReviews')
    .populate('assignedLabors', 'username profileImage workTypes averageRating')
    .populate('applicants.labor', 'username profileImage workTypes experience averageRating');
};

export const applyToWorkPost = async (postId, laborId, message) => {
  return await WorkPost.findByIdAndUpdate(
    postId,
    { $push: { applicants: { labor: laborId, message } } },
    { new: true }
  );
};

export const getSuggestedLabors = async (workType, limit = 5) => {
  return await User.find({
    role: 'labor',
    workTypes: workType,
    isAvailable: true,
  })
    .sort({ averageRating: -1, totalReviews: -1 })
    .limit(limit)
    .select('username profileImage workTypes experience averageRating totalReviews location');
};

export const getCustomerPosts = async (customerId) => {
  return await WorkPost.find({ customer: customerId })
    .populate('assignedLabors', 'username profileImage')
    .sort({ createdAt: -1 });
};
