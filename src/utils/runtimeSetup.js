const fs = require("fs");
const path = require("path");


const createDirectories = () => {

    const directories = [

        "logs",

        "uploads",

        "public"

    ];


    directories.forEach(directory => {

        const location =
            path.join(
                process.cwd(),
                directory
            );


        if (!fs.existsSync(location)) {

            fs.mkdirSync(
                location,
                {
                    recursive: true
                }
            );

        }

    });


    console.log(
        "Runtime directories verified"
    );

};


module.exports = createDirectories;
