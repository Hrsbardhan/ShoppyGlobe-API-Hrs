const {
    body,
    param
} = require("express-validator");

exports.productValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Product title required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description required"),

    body("price")
        .isNumeric()
        .withMessage("Valid price required"),

    body("image")
        .optional()
        .isString()
        .withMessage("Image must be a string"),

    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category required"),

    body("stock")
        .optional()
        .isInt({
            min: 0
        })
        .withMessage("Stock cannot be negative")
];

exports.productIdValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid product id")
];
