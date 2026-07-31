const { body, param, validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: errors.array()[0].msg,
            data: null
        });
    }

    next();
};

const registerValidator = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must contain minimum 6 characters")
];

const loginValidator = [
    body("email").trim().isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required")
];

const cartValidator = [
    body("productId").isMongoId().withMessage("Valid product id required"),
    body("quantity").optional().isInt({ min: 1 }).withMessage("Quantity must be minimum 1")
];

const updateCartValidator = [
    param("id").isMongoId().withMessage("Valid cart item id required"),
    body("quantity").isInt({ min: 1 }).withMessage("Quantity must be minimum 1")
];

module.exports = {
    validate,
    registerValidator,
    loginValidator,
    cartValidator,
    updateCartValidator
};
