const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    console.log("Reached ");
    const token = req.headers.authorization;
    console.log("Token "+token);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;