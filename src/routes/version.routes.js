const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "ShoppyGlobe API v1 running",

        data: {

            version: "1.0.0",

            status: "production-ready"

        }

    });

});


module.exports = router;
