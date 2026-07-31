const express = require("express");

const {
    getProducts,
    getProductById,
    createProduct
} = require("../controllers/product.controller");

const {
    productValidator,
    productIdValidator
} = require("../middleware/product.validation.middleware");

const {
    validationResult
} = require("express-validator");

const router = express.Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            data: errors.array()
        });
    }

    next();
};


router.get(
    "/",
    getProducts
);


router.get(
    "/:id",
    productIdValidator,
    validateRequest,
    getProductById
);


router.post(
    "/",
    productValidator,
    validateRequest,
    createProduct
);


module.exports = router;
