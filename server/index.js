// Code to run the server

require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRoutes");

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],  
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Use correct route
app.use("/", authRoutes);

mongoose.connect("<your Mongo_DB connection string>", {
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err.message));

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
