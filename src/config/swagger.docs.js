/**
 * @swagger
 * tags:
 *   - name: Health
 *     description: API health monitoring
 */


/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Check API health
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is healthy
 */


/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management APIs
 */


/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get products with pagination search and filters
 *     tags: [Products]
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *       - name: search
 *         in: query
 *         schema:
 *           type: string
 *       - name: category
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Products returned successfully
 */


/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User authentication
 */


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: User registered
 */


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Login successful
 */


/**
 * @swagger
 * tags:
 *   - name: Orders
 *     description: Order management
 */


/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get user orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Orders fetched
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
