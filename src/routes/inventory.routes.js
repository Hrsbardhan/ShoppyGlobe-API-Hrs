const express = require("express");

const {
    updateStock,
    getLowStockProducts
} = require("../controllers/inventory.controller");


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


router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    updateStock
);


router.get(
    "/low-stock",
    authMiddleware,
    adminMiddleware,
    getLowStockProducts
);


module.exports = router;
