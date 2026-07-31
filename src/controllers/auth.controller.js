const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
};

const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "User already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            token: generateToken(user._id),
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });

        }

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {

            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: generateToken(user._id),
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    register,
    login
};
