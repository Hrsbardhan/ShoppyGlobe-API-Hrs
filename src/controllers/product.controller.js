const Product = require("../models/Product");

const getAllProducts = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        const filter = {};

        if (req.query.category) {

            filter.category = req.query.category;

        }

        if (req.query.keyword) {

            filter.name = {
                $regex: req.query.keyword,
                $options: "i"
            };

        }

        if (req.query.minPrice || req.query.maxPrice) {

            filter.price = {};

            if (req.query.minPrice)
                filter.price.$gte = Number(req.query.minPrice);

            if (req.query.maxPrice)
                filter.price.$lte = Number(req.query.maxPrice);

        }

        let query = Product.find(filter);

        if (req.query.sort === "price") {

            query = query.sort({ price: 1 });

        }

        if (req.query.sort === "-price") {

            query = query.sort({ price: -1 });

        }

        if (req.query.sort === "latest") {

            query = query.sort({ createdAt: -1 });

        }

        const total = await Product.countDocuments(filter);

        const products = await query
            .skip(skip)
            .limit(limit);

        return res.status(200).json({

            success: true,

            page,

            limit,

            total,

            totalPages: Math.ceil(total / limit),

            count: products.length,

            data: products

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);

        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }

        return res.status(200).json({

            success: true,

            data: product

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const createProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);

        return res.status(201).json({

            success: true,

            data: product

        });

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

const updateProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true,

                runValidators: true

            }

        );

        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }

        return res.status(200).json({

            success: true,

            data: product

        });

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({

                success: false,

                message: "Product not found"

            });

        }

        return res.status(200).json({

            success: true,

            message: "Product deleted successfully"

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    getAllProducts,

    getProductById,

    createProduct,

    updateProduct,

    deleteProduct

};
