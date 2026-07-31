const { body, param } = require("express-validator");

exports.registerValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain minimum 6 characters")
];


exports.loginValidator = [

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")

];


exports.cartValidator = [

    body("productId")
        .isMongoId()
        .withMessage("Valid product id required"),

    body("quantity")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Quantity must be minimum 1")

];


exports.updateCartValidator = [

    param("id")
        .isMongoId()
        .withMessage("Valid cart item id required"),

    body("quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be minimum 1")

];
