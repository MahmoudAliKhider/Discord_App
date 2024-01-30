import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = () => {
    socket = io('http://localhost:5050');

    socket.on('connection', () => {
        console.log('successfully connected with socket');
        console.log(socket.id);
    })
}