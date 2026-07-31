const express = require("express");

const {
    getUsers,
    updateUserRole
} = require("../controllers/admin.controller");


const authMiddleware = require("../middleware/auth.middleware");


const router = express.Router();


const adminMiddleware = (req, res, next) => {

    if (req.user.role !== "admin") {

        return res.status(403).json({

            success: false,

            message: "Admin access required",

            data: null

        });

    }


    next();

};


router.get(
    "/users",
    authMiddleware,
    adminMiddleware,
    getUsers
);


router.put(
    "/users/:id/role",
    authMiddleware,
    adminMiddleware,
    updateUserRole
);


module.exports = router;
