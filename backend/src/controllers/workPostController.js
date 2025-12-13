import * as workPostService from '../services/workPostService.js';
import WorkPost from '../models/WorkPost.js';

export const createWorkPost = async (req, res) => {
  try {
    if (req.user.role !== 'customer') {
      return res.status(403).json({ message: 'Only customers can create work posts' });
    }
    const post = await workPostService.createWorkPost({ ...req.body, customer: req.user._id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorkPosts = async (req, res) => {
  try {
    const posts = await workPostService.getWorkPosts(req.query);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorkPostById = async (req, res) => {
  try {
    const post = await workPostService.getWorkPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Work post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const applyToWorkPost = async (req, res) => {
  try {
    if (req.user.role !== 'labor') {
      return res.status(403).json({ message: 'Only labors can apply to work posts' });
    }

    const post = await WorkPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Work post not found' });
    }

    // Check if already applied
    const alreadyApplied = post.applicants.some(
      a => a.labor.toString() === req.user._id.toString()
    );
    if (alreadyApplied) {
      return res.status(400).json({ message: 'You have already applied to this post' });
    }

    const updatedPost = await workPostService.applyToWorkPost(req.params.id, req.user._id, req.body.message);
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSuggestedLabors = async (req, res) => {
  try {
    const labors = await workPostService.getSuggestedLabors(req.query.workType);
    res.json(labors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const posts = await workPostService.getCustomerPosts(req.user._id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePostStatus = async (req, res) => {
  try {
    const post = await WorkPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Work post not found' });
    }
    if (post.customer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    post.status = req.body.status;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateApplicantStatus = async (req, res) => {
  try {
    const { applicantId, status } = req.body;
    const post = await WorkPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Work post not found' });
    }
    if (post.customer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const applicant = post.applicants.id(applicantId);
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }

    applicant.status = status;
    if (status === 'accepted') {
      post.assignedLabors.push(applicant.labor);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
