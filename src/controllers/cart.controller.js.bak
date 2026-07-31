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
