const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
            .select("-password");

        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: user
        });

    } catch (error) {
        next(error);
    }
};


exports.updateProfile = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                name: req.body.name,
                email: req.body.email
            },
            {
                new: true,
                runValidators: true
            }
        ).select("-password");

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: user
        });

    } catch (error) {
        next(error);
    }
};


exports.changePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        const isMatch = await bcrypt.compare(
            req.body.currentPassword,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Current password incorrect",
                data: null
            });
        }

        user.password = await bcrypt.hash(
            req.body.newPassword,
            10
        );

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password changed successfully",
            data: null
        });

    } catch (error) {
        next(error);
    }
};
