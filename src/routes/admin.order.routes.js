const express = require("express");

const {
    updateOrderStatus,
    getAllOrders
} = require("../controllers/admin.order.controller");


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
    "/orders",
    authMiddleware,
    adminMiddleware,
    getAllOrders
);


router.put(
    "/orders/:id/status",
    authMiddleware,
    adminMiddleware,
    updateOrderStatus
);


module.exports = router;
