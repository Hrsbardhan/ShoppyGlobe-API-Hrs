const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const { profileValidator } = require("../middleware/user.validation.middleware");

const {
    getProfile,
    updateProfile
} = require("../controllers/user.controller");

const {
    changePassword
} = require("../controllers/password.controller");

router.get(
    "/profile",
    authMiddleware,
    getProfile
);

router.put(
    "/profile",
    authMiddleware,
    profileValidator,
    updateProfile
);

router.put(
    "/change-password",
    authMiddleware,
    changePassword
);

module.exports = router;
