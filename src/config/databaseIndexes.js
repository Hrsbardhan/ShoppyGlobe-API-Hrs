const mongoose = require("mongoose");


const addIndexes = async () => {

    try {

        const Product = require("../models/Product");
        const User = require("../models/User");
        const Order = require("../models/Order");


        await Product.collection.createIndex({

            title: "text",

            description: "text"

        });


        await Product.collection.createIndex({

            category: 1

        });


        await Product.collection.createIndex({

            price: 1

        });


        await Product.collection.createIndex({

            stock: 1

        });


        await User.collection.createIndex({

            email: 1

        });


        await Order.collection.createIndex({

            user: 1

        });


        console.log(
            "Database indexes created successfully"
        );


    } catch (error) {

        console.error(
            "Index creation failed:",
            error.message
        );

    }

};


module.exports = addIndexes;
