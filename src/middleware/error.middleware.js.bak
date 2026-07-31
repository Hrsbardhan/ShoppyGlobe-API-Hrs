const logger = require("../utils/logger");


const errorMiddleware = (
    err,
    req,
    res,
    next
) => {

    logger.error({

        message: err.message,

        stack: err.stack,

        path: req.originalUrl,

        method: req.method

    });


    res.status(

        err.statusCode || 500

    ).json({

        success: false,

        message:

            err.message ||

            "Internal Server Error",

        data: null

    });

};


module.exports = errorMiddleware;
