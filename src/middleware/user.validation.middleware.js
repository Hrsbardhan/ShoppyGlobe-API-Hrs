const {
    body
} = require("express-validator");


exports.profileValidator = [

    body("name")
        .optional()
        .trim()
        .isLength({
            min: 2
        })
        .withMessage(
            "Name must contain at least 2 characters"
        ),


    body("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage(
            "Valid email required"
        )

];
