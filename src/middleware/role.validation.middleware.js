const {
    body
} = require("express-validator");


exports.roleValidator = [

    body("role")
        .optional()
        .isIn([
            "user",
            "admin"
        ])
        .withMessage(
            "Invalid role"
        )

];
