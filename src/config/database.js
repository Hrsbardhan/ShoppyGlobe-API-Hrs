const mongoose = require("mongoose");

const connectDatabase = async () => {

    if (process.env.NODE_ENV === "test") {
        return;
    }

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

module.exports = connectDatabase;
