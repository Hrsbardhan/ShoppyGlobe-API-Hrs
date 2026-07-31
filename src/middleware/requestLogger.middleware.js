const logger = require("../utils/logger");
const { v4: uuidv4 } = require("uuid");


module.exports = (req, res, next) => {

    req.requestId = uuidv4();


    res.setHeader(
        "X-Request-ID",
        req.requestId
    );


    logger.info({

        requestId: req.requestId,

        method: req.method,

        url: req.originalUrl

    });


    next();

};
