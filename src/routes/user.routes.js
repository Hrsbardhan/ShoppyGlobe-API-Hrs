const express = require("express");

const router =
    express.Router();


const authMiddleware =
    require("../middleware/auth.middleware");


const { profileValidator } = require("../middleware/user.validation.middleware");`n`nconst {
    getProfile,
    updateProfile
} =
require("../controllers/user.controller");



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



module.exports = router;

