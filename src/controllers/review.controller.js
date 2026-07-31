const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");


exports.addReview = asyncHandler(async (req, res) => {

    const {
        rating,
        comment
    } = req.body;


    const product = await Product.findById(
        req.params.id
    );


    if (!product) {

        return res.status(404).json({

            success: false,

            message: "Product not found",

            data: null

        });

    }


    const existingReview =
        product.reviews.find(
            review =>
                review.user.toString() === req.user.id
        );


    if (existingReview) {

        return res.status(400).json({

            success: false,

            message: "Product already reviewed",

            data: null

        });

    }


    product.reviews.push({

        user: req.user.id,

        rating,

        comment

    });


    product.averageRating =
        product.reviews.reduce(
            (sum, item) =>
                sum + item.rating,
            0
        ) / product.reviews.length;


    await product.save();


    res.status(201).json({

        success: true,

        message: "Review added successfully",

        data: product

    });

});
