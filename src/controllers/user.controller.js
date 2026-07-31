const User = require("../models/User");


exports.getProfile = async (req, res, next) => {

    try {


        const user =
            await User.findById(req.user.id)
                .select("-password");


        if (!user) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found",

                data:
                    null

            });

        }


        res.status(200).json({

            success: true,

            message:
                "Profile fetched successfully",

            data:
                user

        });


    } catch (error) {

        next(error);

    }

};



exports.updateProfile = async (req, res, next) => {

    try {


        const allowedFields = [

            "name",

            "email"

        ];


        const updates = {};


        allowedFields.forEach(
            field => {

                if (req.body[field]) {

                    updates[field] =
                        req.body[field];

                }

            }
        );


        const user =
            await User.findByIdAndUpdate(

                req.user.id,

                updates,

                {
                    new: true,
                    runValidators: true
                }

            )
            .select("-password");



        res.status(200).json({

            success: true,

            message:
                "Profile updated successfully",

            data:
                user

        });


    } catch(error) {

        next(error);

    }

};
