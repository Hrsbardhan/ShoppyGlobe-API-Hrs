require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./src/config/database");

const productRoutes = require("./src/routes/product.routes");
const authRoutes = require("./src/routes/auth.routes");
const cartRoutes = require("./src/routes/cart.routes");

const errorMiddleware = require("./src/middleware/error.middleware");


const app = express();


connectDB();


app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));



app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/cart", cartRoutes);



app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "ShoppyGlobe API running",

        data: null

    });

});



app.use(errorMiddleware);



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
