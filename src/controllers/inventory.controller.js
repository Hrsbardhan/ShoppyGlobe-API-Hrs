const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");


exports.updateStock = asyncHandler(async (req, res) => {

    const {
        stock
    } = req.body;


    const product =
        await Product.findByIdAndUpdate(

            req.params.id,

            {
                stock
            },

            {
                new: true,
                runValidators: true
            }

        );


    if (!product) {

        return res.status(404).json({

            success: false,

            message: "Product not found",

            data: null

        });

    }


    res.status(200).json({

        success: true,

        message: "Stock updated successfully",

        data: product

    });

});


exports.getLowStockProducts = asyncHandler(async (req, res) => {

    const products =
        await Product.find({

            stock: {
                $lte: 5
            }

        });


    res.status(200).json({

        success: true,

        message: "Low stock products fetched successfully",

        data: products

    });

});
