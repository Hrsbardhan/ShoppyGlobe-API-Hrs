const Order = require("../models/Order");
const asyncHandler = require("../utils/asyncHandler");


exports.updateOrderStatus = asyncHandler(async (req, res) => {

    const {
        status
    } = req.body;


    const order =
        await Order.findByIdAndUpdate(

            req.params.id,

            {
                status
            },

            {
                new: true,
                runValidators: true
            }

        );


    if (!order) {

        return res.status(404).json({

            success: false,

            message: "Order not found",

            data: null

        });

    }


    res.status(200).json({

        success: true,

        message: "Order status updated successfully",

        data: order

    });

});


exports.getAllOrders = asyncHandler(async (req, res) => {

    const orders =
        await Order.find()
            .populate("user", "name email")
            .populate("items.product");


    res.status(200).json({

        success: true,

        message: "Orders fetched successfully",

        data: orders

    });

});
