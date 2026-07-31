const os = require("os");

const logger = require("./logger");


const systemHealth = () => {

    const health = {

        uptime:
            process.uptime(),

        memory:

            process.memoryUsage(),

        cpu:

            os.cpus().length,

        platform:

            os.platform(),

        node:

            process.version,

        timestamp:

            new Date().toISOString()

    };


    logger.info({

        type:
            "system_health",

        health

    });


    return health;

};


module.exports = systemHealth;
