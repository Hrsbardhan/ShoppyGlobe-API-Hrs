# ShoppyGlobe Backend API

Production-ready e-commerce backend API built with:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt Password Encryption
- Express Validator
- Helmet Security
- Morgan Logger
- CORS


## Installation

Clone repository:

git clone https://github.com/Hrsbardhan/ShoppyGlobe-API-Hrs.git


Install dependencies:

npm install


Create environment file:

.env


Add:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe

JWT_SECRET=your_secret_key



## Run Application

Development:

npm run dev


Production:

node server.js



## Database Seed

Insert product data:

npm run seed



## API Endpoints


## Authentication


Register User

POST

/api/auth/register


Body:

{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"password123"
}



Login User

POST

/api/auth/login


Body:

{
    "email":"john@example.com",
    "password":"password123"
}



## Products


Get All Products

GET

/api/products



Get Single Product

GET

/api/products/:id



## Cart

All cart routes require:

Authorization Header

Bearer TOKEN



Get Cart

GET

/api/cart



Add Product

POST

/api/cart


Body:

{
    "productId":"PRODUCT_ID",
    "quantity":2
}



Update Cart Item

PUT

/api/cart/:id


Body:

{
    "quantity":5
}



Remove Cart Item

DELETE

/api/cart/:id



## Response Format


Success:

{
    "success":true,
    "message":"message",
    "data":{}
}



Error:

{
    "success":false,
    "message":"error message",
    "data":null
}



## Project Structure


src

+-- config

+-- controllers

+-- middleware

+-- models

+-- routes

+-- utils

+-- seed



## Security Features

- JWT authentication
- Password hashing
- Helmet security headers
- Request validation
- Centralized error handling



## License

MIT
