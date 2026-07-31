const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");


exports.getProducts = asyncHandler(
    async (req, res) => {


        const {

            page = 1,

            limit = 10,

            search,

            category,

            sort

        } = req.query;



        const filter = {};



        if (search) {

            filter.$text = {

                $search: search

            };

        }



        if (category) {

            filter.category =
                category.toLowerCase();

        }



        let sortOption = {};



        if (sort === "price_asc") {

            sortOption.price = 1;

        }


        if (sort === "price_desc") {

            sortOption.price = -1;

        }



        const products =
            await Product.paginate(

                filter,

                {

                    page: Number(page),

                    limit: Number(limit),

                    sort: sortOption

                }

            );



        res.status(200).json({

            success: true,

            message:
                "Products fetched successfully",

            data: products

        });


    }

);
