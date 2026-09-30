const { GoogleGenerativeAI } = require('@google/generative-ai');

function model() {
  if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not configured');
  const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  return client.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-2.5-flash' });
}

async function generateBlog(topic) {
  const result = await model().generateContent(`Write a clear, useful blog post about: ${topic}. Include a title, introduction, informative sections, and a conclusion. Return plain text.`);
  return result.response.text();
}

async function summarize(content) {
  const result = await model().generateContent(`Summarize the following blog content in 5 concise bullet points and then provide a one-paragraph summary:\n\n${content}`);
  return result.response.text();
}

module.exports = { generateBlog, summarize };
