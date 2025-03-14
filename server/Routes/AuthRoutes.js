const {register,login } = require("../Controllers/AuthControllers");

const router = require("express").Router();

// router.post("/");
router.post("/login", login);
router.post("/register", register);

module.exports = router;