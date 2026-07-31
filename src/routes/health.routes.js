const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "API is healthy",

        data: {
            service: "ShoppyGlobe API",
            environment: process.env.NODE_ENV || "development"
        }

    });

});

module.exports = router;
