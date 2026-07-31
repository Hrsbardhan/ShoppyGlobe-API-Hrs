const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {

    try {

        const header = req.headers.authorization;

        if (!header || !header.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
                data: null
            });
        }

        const token = header.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = await User.findById(decoded.id)
            .select("-password");

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
                data: null
            });
        }

        next();

    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Invalid token",
            data: null
        });

    }
};

module.exports = authMiddleware;
