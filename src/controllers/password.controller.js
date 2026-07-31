const User = require("../models/User");

const bcrypt = require("bcryptjs");


exports.changePassword = async (req, res, next) => {

    try {


        const {
            currentPassword,
            newPassword
        } = req.body;


        const user =
            await User.findById(req.user.id);



        const passwordMatch =
            await bcrypt.compare(
                currentPassword,
                user.password
            );


        if (!passwordMatch) {

            return res.status(400).json({

                success: false,

                message:
                    "Current password is incorrect",

                data:
                    null

            });

        }



        user.password =
            await bcrypt.hash(
                newPassword,
                10
            );


        await user.save();



        res.status(200).json({

            success: true,

            message:
                "Password changed successfully",

            data:
                null

        });


    } catch(error) {

        next(error);

    }

};
