const Category = require("../models/Category");
const asyncHandler = require("../utils/asyncHandler");


exports.getCategories = asyncHandler(async (req, res) => {

    const categories =
        await Category.find();


    res.status(200).json({

        success: true,

        message: "Categories fetched successfully",

        data: categories

    });

});


exports.createCategory = asyncHandler(async (req, res) => {

    const category =
        await Category.create(req.body);


    res.status(201).json({

        success: true,

        message: "Category created successfully",

        data: category

    });

});
