const express = require("express");

const authMiddleware = require("../middleware/auth.middleware");

const {
    cartValidator,
    updateCartValidator
} = require("../middleware/validation.middleware");


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
    cartValidator,
    addToCart
);


router.put(
    "/:id",
    updateCartValidator,
    updateCartItem
);


router.delete(
    "/:id",
    removeCartItem
);


module.exports = router;
