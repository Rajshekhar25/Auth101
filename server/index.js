const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app=express();

app.listen(4000,()=>{
    console.log("Server is running on port 3000");
});

//what cors does is it allows us to make requests from our frontend to our backend(which are hosted on different domains)
//browser by default blocks requests from different domains for security reasons

mongoose.connect("mongodb+srv://Rajshekhar25:t7ThRelmPUn4vi8u@cluster0.mongodb.net/myDatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET","POST"],
    credentials: true,
})
);

app.use(express.json());