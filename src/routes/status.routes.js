const express = require("express");

const router =
    express.Router();


router.get(
    "/health",
    (req, res) => {


        res.status(200).json({

            success: true,

            message:
                "Service healthy",

            data: {

                service:
                    "ShoppyGlobe API",

                version:
                    "1.0.0",

                uptime:
                    process.uptime(),

                timestamp:
                    new Date().toISOString()

            }

        });


    }
);


module.exports = router;
