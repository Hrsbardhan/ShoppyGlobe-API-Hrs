const express = require("express");

const systemHealth =
    require("../utils/systemHealth");


const router =
    express.Router();


router.get(
    "/metrics",
    (req, res) => {

        res.status(200).json({

            success: true,

            message:
                "System metrics fetched successfully",

            data:
                systemHealth()

        });

    }
);


module.exports = router;
