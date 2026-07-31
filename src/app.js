const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ShoppyGlobe API is running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        database: "Connected",
        status: "OK"
    });
});

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use(errorHandler);

module.exports = app;
