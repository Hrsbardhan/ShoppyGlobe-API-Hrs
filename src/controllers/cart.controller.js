const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCart = async (req, res) => {

    try {

        const cart = await Cart.find({ user: req.user._id })
            .populate("product");

        return res.status(200).json({
            success: true,
            count: cart.length,
            data: cart
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const addToCart = async (req, res) => {

    try {

        const { productId, quantity } = req.body;

        const product = await Product.findById(productId);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        const existing = await Cart.findOne({
            user: req.user._id,
            product: productId
        });

        if (existing) {

            existing.quantity += quantity || 1;

            await existing.save();

            return res.status(200).json({
                success: true,
                message: "Cart updated",
                data: existing
            });

        }

        const cart = await Cart.create({
            user: req.user._id,
            product: productId,
            quantity: quantity || 1
        });

        return res.status(201).json({
            success: true,
            message: "Product added to cart",
            data: cart
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            _id: req.params.id,
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });

        }

        cart.quantity = req.body.quantity;

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Cart updated",
            data: cart
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const deleteCart = async (req, res) => {

    try {

        const cart = await Cart.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Cart item removed"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getCart,
    addToCart,
    updateCart,
    deleteCart
};
