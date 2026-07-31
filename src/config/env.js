const required = [
    "PORT",
    "MONGO_URI",
    "JWT_SECRET"
];

required.forEach((key) => {

    if (!process.env[key]) {

        console.error(`Missing environment variable: ${key}`);

        process.exit(1);

    }

});

module.exports = true;
