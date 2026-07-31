const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

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


const productRoutes = require("./routes/product.routes");

app.use("/products", productRoutes);

module.exports = app;

