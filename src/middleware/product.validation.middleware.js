const {
    body
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


    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category required"),


    body("stock")
        .optional()
        .isInt({
            min:0
        })
        .withMessage("Stock cannot be negative")

];
