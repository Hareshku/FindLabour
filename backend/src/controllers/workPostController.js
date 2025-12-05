import * as workPostService from '../services/workPostService.js';

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
    const post = await workPostService.applyToWorkPost(req.params.id, req.user._id, req.body.message);
    res.json(post);
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
