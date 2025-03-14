const UserModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

const maxAge=3 * 24 * 60 * 60;
const createToken = (id) => {
    
    return jwt.sign({ id },"rajshekhar",{
        expiresIn: maxAge,

    });
};

const handleErrors= (err)=>{

    let errors={email:"",password:""};
    
    if(err.code===11000){
        errors.email="Email is already registered";
        return errors;
    }

    if(err.message.includes("Users validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        });
    }
};

module.exports.register=async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user =await UserModel.create({email,password});
        const token = createToken(user._id);
        res.cookie("jwt", token, { withCredentials:true, httpOnly: false, maxAge: maxAge * 1000 });

        res.status(201).json({user:user._id,created:true});
    } catch (err) {
        console.log(err);        
    }
};


// module.exports.login = async (req, res, next) => {

// };

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        res.status(200).json({ user: user._id, message: "Login successful" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};





// const UserModel = require("../Models/UserModel"); // Ensure your model path is correct
// const jwt = require("jsonwebtoken");

// const maxAge = 3 * 24 * 60 * 60; // 3 days

// const createToken = (id) => {
//     return jwt.sign({ id }, "jwt_secret", { expiresIn: maxAge });
// };

// module.exports.register = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "All fields are required!" });
//         }

//         const user = await UserModel.create({ email, password });
//         const token = createToken(user._id);

//         res.cookie("jwt", token, { withCredentials: true, httpOnly: false, maxAge: maxAge * 1000 });

//         return res.status(201).json({ user: user._id, created: true });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ error: "Server error!" });
//     }
// };

