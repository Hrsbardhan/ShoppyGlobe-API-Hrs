const asyncHandler = require("../utils/asyncHandler");
const Product = require("../models/Product");
const validateObjectId = require("../utils/validateObjectId");


exports.getProducts = asyncHandler(async (req, res) => {

    const {
        page = 1,
        limit = 10,
        search,
        category,
        sort
    } = req.query;


    const filter = {};


    if (search) {

        filter.$or = [

            {
                title: {
                    $regex: search,
                    $options: "i"
                }
            },

            {
                description: {
                    $regex: search,
                    $options: "i"
                }
            }

        ];
    }


    if (category) {

        filter.category = category.toLowerCase();

    }


    let query = Product.find(filter);


    if (sort === "price_asc") {

        query = query.sort({
            price: 1
        });

    }


    if (sort === "price_desc") {

        query = query.sort({
            price: -1
        });

    }


    const pageNumber = Number(page);
    const limitNumber = Number(limit);


    const products = await query
        .skip(
            (pageNumber - 1) * limitNumber
        )
        .limit(limitNumber);


    const total =
        await Product.countDocuments(filter);


    res.status(200).json({

        success: true,

        message: "Products fetched successfully",

        data: {

            products,

            pagination: {

                total,

                page: pageNumber,

                limit: limitNumber,

                totalPages:
                    Math.ceil(
                        total / limitNumber
                    )

            }

        }

    });

});


exports.getProductById = asyncHandler(async (req, res) => {

    if (!validateObjectId(req.params.id)) {

        return res.status(400).json({

            success: false,

            message: "Invalid product id",

            data: null

        });

    }


    const product =
        await Product.findById(req.params.id);


    if (!product) {

        return res.status(404).json({

            success: false,

            message: "Product not found",

            data: null

        });

    }


    res.status(200).json({

        success: true,

        message: "Product fetched successfully",

        data: product

    });

});
