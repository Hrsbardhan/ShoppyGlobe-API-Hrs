const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");

const {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem
} = require("../controllers/cart.controller");


const router = express.Router();


router.use(authMiddleware);


router.get(
    "/",
    getCart
);


router.post(
    "/",
    addToCart
);


router.put(
    "/:id",
    updateCartItem
);


router.delete(
    "/:id",
    removeCartItem
);


module.exports = router;
