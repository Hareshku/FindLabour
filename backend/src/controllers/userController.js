import User from '../models/User.js';
import WorkPost from '../models/WorkPost.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: req.body },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorkers = async (req, res) => {
  try {
    const { workType, location, search } = req.query;
    const query = { role: 'labor' };

    if (workType && workType !== 'all') {
      query.workTypes = workType;
    }
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    if (search) {
      query.$or = [
        { username: new RegExp(search, 'i') },
        { location: new RegExp(search, 'i') },
      ];
    }

    const workers = await User.find(query)
      .select('-password -email')
      .sort({ averageRating: -1, totalReviews: -1 });

    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const posts = await WorkPost.find({
      'applicants.labor': req.user._id
    }).populate('customer', 'username profileImage');

    const applications = posts.map(post => {
      const application = post.applicants.find(
        a => a.labor.toString() === req.user._id.toString()
      );
      return {
        _id: application._id,
        workPost: {
          _id: post._id,
          title: post.title,
          workType: post.workType,
          location: post.location,
          budget: post.budget,
          customer: post.customer,
        },
        status: application.status,
        appliedAt: application.appliedAt,
      };
    });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
