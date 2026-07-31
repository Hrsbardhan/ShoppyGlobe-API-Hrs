const mongoose = require("mongoose");


const optimizeModels = async () => {

    const Product =
        require("../models/Product");


    const User =
        require("../models/User");


    const Order =
        require("../models/Order");


    await Product.syncIndexes();

    await User.syncIndexes();

    await Order.syncIndexes();


    console.log(
        "MongoDB model indexes synchronized"
    );

};


module.exports = optimizeModels;
