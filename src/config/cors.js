const allowedOrigins = () => {

    if (process.env.NODE_ENV === "production") {

        return process.env.CORS_ORIGIN
            ? process.env.CORS_ORIGIN.split(",")
            : [];

    }


    return "*";

};


module.exports = allowedOrigins;
