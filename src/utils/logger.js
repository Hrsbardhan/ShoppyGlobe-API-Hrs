const fs = require("fs");

const path = require("path");


const logDirectory =
    path.join(__dirname, "../../logs");


if (!fs.existsSync(logDirectory)) {

    fs.mkdirSync(
        logDirectory,
        {
            recursive: true
        }
    );

}


const logFile =
    path.join(
        logDirectory,
        "application.log"
    );


const logger = {


    info: (message) => {

        const entry =
            `[INFO] ${new Date().toISOString()} ${JSON.stringify(message)}\n`;


        fs.appendFileSync(
            logFile,
            entry
        );

    },


    error: (message) => {

        const entry =
            `[ERROR] ${new Date().toISOString()} ${JSON.stringify(message)}\n`;


        fs.appendFileSync(
            logFile,
            entry
        );

    }


};


module.exports = logger;
