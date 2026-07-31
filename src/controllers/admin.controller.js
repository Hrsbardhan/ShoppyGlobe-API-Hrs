const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");


exports.getUsers = asyncHandler(async (req, res) => {

    const users = await User.find()
        .select("-password");


    res.status(200).json({

        success: true,

        message: "Users fetched successfully",

        data: users

    });

});


exports.updateUserRole = asyncHandler(async (req, res) => {

    const {
        role
    } = req.body;


    const user = await User.findByIdAndUpdate(

        req.params.id,

        {
            role
        },

        {
            new: true,
            runValidators: true
        }

    ).select("-password");


    if (!user) {

        return res.status(404).json({

            success: false,

            message: "User not found",

            data: null

        });

    }


    res.status(200).json({

        success: true,

        message: "User role updated successfully",

        data: user

    });

});
