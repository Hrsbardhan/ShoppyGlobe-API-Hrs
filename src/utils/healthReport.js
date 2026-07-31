const fs = require("fs");
const path = require("path");


const generateHealthReport = () => {

    const report = {

        project:
            "ShoppyGlobe API",

        generatedAt:
            new Date().toISOString(),

        status:
            "production-ready",

        modules: [

            "Authentication",

            "Products",

            "Cart",

            "Orders",

            "Admin",

            "Inventory",

            "Reviews",

            "Categories"

        ]

    };


    fs.writeFileSync(

        path.join(
            process.cwd(),
            "health-report.json"
        ),

        JSON.stringify(
            report,
            null,
            4
        )

    );


    console.log(
        "Health report generated"
    );

};


module.exports = generateHealthReport;
