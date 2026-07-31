const {
    body
} = require("express-validator");


exports.passwordValidator = [

    body("currentPassword")
        .notEmpty()
        .withMessage(
            "Current password required"
        ),


    body("newPassword")
        .isLength({
            min: 6
        })
        .withMessage(
            "New password must contain minimum 6 characters"
        )

];
