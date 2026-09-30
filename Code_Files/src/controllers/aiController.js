const { generateBlog, summarize } = require('../services/geminiService');

exports.generate = async (req, res, next) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ message: 'topic is required' });
    res.json({ topic, content: await generateBlog(topic) });
  } catch (e) { next(e); }
};

exports.summarize = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: 'content is required' });
    res.json({ summary: await summarize(content) });
  } catch (e) { next(e); }
};
