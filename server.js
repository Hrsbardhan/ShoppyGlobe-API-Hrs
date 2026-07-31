const reviewRoutes = require('./src/routes/review.routes');
const healthRoutes = require('./src/routes/health.routes');
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const connectDatabase = require("./src/config/database");

const errorMiddleware = require("./src/middleware/error.middleware");

const rateLimiter = require("./src/middleware/rateLimit.middleware");
const sanitizeMiddleware = require("./src/middleware/sanitize.middleware");
const hppMiddleware = require("./src/middleware/hpp.middleware");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");

const authRoutes = require("./src/routes/auth.routes");
const productRoutes = require("./src/routes/product.routes");
const cartRoutes = require("./src/routes/cart.routes");
const userRoutes = require("./src/routes/user.routes");
const orderRoutes = require("./src/routes/order.routes");

dotenv.config();

connectDatabase();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(rateLimiter);
app.use(sanitizeMiddleware);
app.use(hppMiddleware);

app.use("/api/health", healthRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ShoppyGlobe API running",
        data: null
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(
            `Server running on port ${PORT}`
        );
    });
}

module.exports = app;


app.use('/api/reviews', reviewRoutes);
