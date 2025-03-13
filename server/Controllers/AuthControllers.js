const UserModel = require('../Models/UserModel');

module.exports.register=async (req, res, next) => {};


module.exports.login=async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user =await UserModel.create({email,password});
    } catch (err) {}


};