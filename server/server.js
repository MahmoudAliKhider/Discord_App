const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

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