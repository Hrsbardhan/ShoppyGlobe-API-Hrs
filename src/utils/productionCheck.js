const productionCheck = () => {

    const requiredVariables = [
        "MONGO_URI",
        "JWT_SECRET"
    ];


    const missing =
        requiredVariables.filter(
            variable =>
                !process.env[variable]
        );


    if (missing.length > 0) {

        throw new Error(
            `Missing environment variables: ${missing.join(", ")}`
        );

    }

};


module.exports = productionCheck;
