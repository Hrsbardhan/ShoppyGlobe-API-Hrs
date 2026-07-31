const express = require("express");

const {
    getProfile,
    updateProfile,
    changePassword
} = require("../controllers/user.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get(
    "/profile",
    authMiddleware,
    getProfile
);

router.put(
    "/profile",
    authMiddleware,
    updateProfile
);

router.put(
    "/password",
    authMiddleware,
    changePassword
);

module.exports = router;
