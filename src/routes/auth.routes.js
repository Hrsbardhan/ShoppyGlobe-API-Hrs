const express = require("express");
const {
    register,
    login
} = require("../controllers/auth.controller");
const {
    registerValidator,
    loginValidator
} = require("../middleware/validation.middleware");
const validate = require("../middleware/validation.middleware").validate;

const router = express.Router();

router.post(
    "/register",
    registerValidator,
    validate,
    register
);

router.post(
    "/login",
    loginValidator,
    validate,
    login
);

module.exports = router;
