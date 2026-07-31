const mongoose = require("mongoose");


const connectDatabase = async () => {

    try {

        await mongoose.connect(
            process.env.MONGO_URI
        );


        console.log("MongoDB Connected");


    } catch (error) {

        console.error(
            "Database connection failed:",
            error.message
        );


        process.exit(1);

    }

};


const disconnectDatabase = async () => {

    if (mongoose.connection.readyState !== 0) {

        await mongoose.connection.close();

    }

};


module.exports = {

    connectDatabase,

    disconnectDatabase

};
