const express = require('express');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;