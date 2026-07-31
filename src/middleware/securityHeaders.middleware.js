const helmet = require("helmet");


module.exports = helmet({

    contentSecurityPolicy: {

        directives: {

            defaultSrc: [
                "'self'"
            ],

            imgSrc: [
                "'self'",
                "data:",
                "https:"
            ],

            scriptSrc: [
                "'self'"
            ]

        }

    },

    crossOriginEmbedderPolicy: false

});
