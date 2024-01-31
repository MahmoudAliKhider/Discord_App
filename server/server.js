const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

const socketServer = require("./socketServer");
const authRoutes = require("./routes/authRoute");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");

const PORT = process.env.PORT || process.env.API_PORT

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes);
app.use('/api/friend-invitation',friendInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
            console.log(`dataBase connection`);
        })
    })
    .catch((err) => {
        console.log("DataBase connection error")
        console.error(err);
    })