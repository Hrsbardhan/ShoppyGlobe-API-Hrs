const fs = require("fs");
const path = require("path");


const requiredFiles = [

    "server.js",

    "package.json",

    ".env.example",

    "src/config/database.js",

    "src/controllers/auth.controller.js",

    "src/controllers/product.controller.js",

    "src/controllers/cart.controller.js",

    "src/routes/auth.routes.js",

    "src/routes/product.routes.js",

    "src/routes/cart.routes.js",

    "src/models/User.js",

    "src/models/Product.js",

    "src/models/Cart.js"

];


const validateProjectStructure = () => {

    const missing = [];


    requiredFiles.forEach(file => {

        const fullPath =
            path.join(
                process.cwd(),
                file
            );


        if (!fs.existsSync(fullPath)) {

            missing.push(file);

        }

    });


    if (missing.length > 0) {

        throw new Error(

            `Missing project files: ${missing.join(", ")}`

        );

    }


    console.log(
        "Project structure validation passed"
    );

};


module.exports = validateProjectStructure;
