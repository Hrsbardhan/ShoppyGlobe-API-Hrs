const express = require("express");

const {
    addReview
} = require("../controllers/review.controller");


const authMiddleware = require("../middleware/auth.middleware");


const router = express.Router();


router.post(
    "/products/:id/reviews",
    authMiddleware,
    addReview
);


module.exports = router;
