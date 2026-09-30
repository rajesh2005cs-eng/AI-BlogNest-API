const Blog = require('../models/Blog');

exports.create = async (req, res, next) => {
  try { const blog = await Blog.create({ ...req.body, author: req.user._id }); res.status(201).json(blog); } catch (e) { next(e); }
};
exports.list = async (req, res, next) => {
  try { res.json(await Blog.find().populate('author', 'name email').sort({ createdAt: -1 })); } catch (e) { next(e); }
};
exports.getOne = async (req, res, next) => {
  try { const blog = await Blog.findById(req.params.id).populate('author', 'name email'); if (!blog) return res.status(404).json({ message: 'Blog not found' }); res.json(blog); } catch (e) { next(e); }
};
exports.update = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
    if (!blog) return res.status(404).json({ message: 'Blog not found or not owned by user' });
    Object.assign(blog, req.body); await blog.save(); res.json(blog);
  } catch (e) { next(e); }
};
exports.remove = async (req, res, next) => {
  try { const blog = await Blog.findOneAndDelete({ _id: req.params.id, author: req.user._id }); if (!blog) return res.status(404).json({ message: 'Blog not found or not owned by user' }); res.json({ message: 'Blog deleted successfully' }); } catch (e) { next(e); }
};
