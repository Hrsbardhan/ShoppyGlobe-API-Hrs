const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("../utils/asyncHandler");


exports.register = asyncHandler(async (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;


    const existingUser =
        await User.findOne({
            email
        });


    if (existingUser) {

        return res.status(400).json({

            success: false,

            message: "User already exists",

            data: null

        });

    }


    const hashedPassword =
        await bcrypt.hash(
            password,
            10
        );


    const user =
        await User.create({

            name,

            email,

            password: hashedPassword

        });


    res.status(201).json({

        success: true,

        message: "Registration successful",

        data: {

            user,

            token:
                generateToken(user._id)

        }

    });

});
