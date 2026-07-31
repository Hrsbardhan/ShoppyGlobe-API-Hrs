require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("../models/Product");
const products = require("./products");

async function seedDatabase() {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("Products Seeded Successfully");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit(1);

    }

}

seedDatabase();
