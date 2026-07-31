const authLimiter = require('../middleware/authRateLimit.middleware');
const {
    registerValidator,
    loginValidator,
    cartValidator,
    updateCartValidator
} = require("../middleware/validation.middleware");


const express = require("express");

const {
    register,
    login
} = require("../controllers/auth.controller");


const router = express.Router();


router.post(
    "/register",
    registerValidator,
    register
);


router.post(
    "/login",
    loginValidator,
    login
);


module.exports = router;

