const express = require('express');
const { generate, summarize } = require('../controllers/aiController');
const router = express.Router();
router.post('/generate-blog', generate);
router.post('/summarize', summarize);
module.exports = router;
