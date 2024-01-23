const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.body.params || req.headers["authorization"];

    if (!token) {
        return res.status(403).send("A token is Required");
    }

    try {
        const token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        return res.status(401).send("Invalid Token")
    }

    return next();
}

module.exports = verifyToken;