const express = require("express");

const protect = require("../middleware/auth.middleware");

const {
    getCart,
    addToCart,
    updateCart,
    deleteCart
} = require("../controllers/cart.controller");

const router = express.Router();

router.use(protect);

router.get("/", getCart);

router.post("/", addToCart);

router.put("/:id", updateCart);

router.delete("/:id", deleteCart);

module.exports = router;
