const asyncHandler = require("../utils/asyncHandler");
const Cart = require("../models/Cart");


exports.getCart = asyncHandler(async (req, res) => {

    const cart = await Cart.findOne({
        user: req.user.id
    }).populate("items.product");


    res.status(200).json({

        success: true,

        message: "Cart fetched successfully",

        data: cart || {
            items: []
        }

    });

});

exports.addToCart = asyncHandler(async (req, res) => {
    res.status(201).json({
        success: true,
        message: "Item added to cart",
        data: {}
    });
});

exports.updateCartItem = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Cart updated",
        data: {}
    });
});

exports.removeCartItem = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Item removed from cart",
        data: {}
    });
});

