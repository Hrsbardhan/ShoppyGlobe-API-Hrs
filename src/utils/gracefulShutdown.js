const mongoose = require("mongoose");


const gracefulShutdown = () => {

    mongoose.connection.close(() => {

        process.exit(0);

    });

};


process.on(
    "SIGINT",
    gracefulShutdown
);


process.on(
    "SIGTERM",
    gracefulShutdown
);
