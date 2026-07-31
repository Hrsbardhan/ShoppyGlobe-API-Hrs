const logger = require("../utils/logger");
const crypto = require("crypto");

module.exports = (req, res, next) => {
    const start = Date.now();

    const requestId = crypto.randomUUID
        ? crypto.randomUUID()
        : crypto.randomBytes(16).toString("hex");

    req.requestId = requestId;
    res.setHeader("X-Request-Id", requestId);

    res.on("finish", () => {
        logger.info({
            requestId,
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            responseTime: `${Date.now() - start}ms`
        });
    });

    next();
};
