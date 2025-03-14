// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const authRoutes = require("./Routes/AuthRoutes");

// const app=express();

// const cookieParser = require("cookie-parser");

// app.listen(4000,()=>{
//     console.log("Server is running on port 4000");
// });


// mongoose.connect("mongodb+srv://Rajshekhar25:t7ThRelmPUn4vi8u@cluster0.mnk30.mongodb.net/jwt",{
//     serverSelectionTimeoutMS: 5000
   
// }).then(()=>{
//     console.log("Connected to MongoDB");
// }).catch(err=>{console.log(err.message)});

// //what cors does is it allows us to make requests from our frontend to our backend(which are hosted on different domains)
// //browser by default blocks requests from different domains for security reasons

// app.use(cors({
//     origin: ["http://localhost:3000"],  //frontend url
//     methods: ["GET","POST"],
//     credentials: true,
// })
// );


// app.use(cookieParser());
// app.use(express.json());

// app.use("/",authRoutes);


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

mongoose.connect("mongodb+srv://Rajshekhar25:t7ThRelmPUn4vi8u@cluster0.mnk30.mongodb.net/jwt", {
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err.message));

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
