const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ShoppyGlobe API",
            version: "1.0.0",
            description: "Production E-commerce REST API"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: [
        "./src/routes/*.js"
    ]
};

module.exports = swaggerJsdoc(options);
