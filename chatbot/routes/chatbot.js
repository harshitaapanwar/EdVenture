const express = require('express');
const router = express.Router();

// Chatbot page route
router.get('/', (req, res) => {
    res.render('pages/index');
});

module.exports = router;
