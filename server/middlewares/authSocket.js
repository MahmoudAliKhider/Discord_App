const jwt = require("jsonwebtoken");

const verifyTokenSocket = (socket, next) => {
    const token = socket.handshake.auth?.token;

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        socket.user = decoded;
    } catch (error) {
        const socketError = new Error('NO_AUTHORIZATION');
        return next(socketError);
    }
    next();
}
module.exports = verifyTokenSocket;