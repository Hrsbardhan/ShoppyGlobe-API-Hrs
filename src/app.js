const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const xss = require("xss-clean");

const authRoutes = require("./routes/v1/auth.routes");
const productRoutes = require("./routes/v1/product.routes");
const cartRoutes = require("./routes/v1/cart.routes");

const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(hpp());

app.use(xss());

app.use(morgan("dev"));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

app.get("/", (req, res) => {

    res.json({
        success: true,
        version: "v1",
        message: "ShoppyGlobe REST API"
    });

});

app.get("/health", (req, res) => {

    res.json({
        success: true,
        status: "Healthy"
    });

});

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/products", productRoutes);

app.use("/api/v1/cart", cartRoutes);

app.use((req, res) => {

    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });

});

app.use(errorHandler);

module.exports = app;
