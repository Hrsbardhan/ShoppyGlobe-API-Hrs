const User = require("../models/User");

const adminSeed = async () => {

    const adminEmail =
        "admin@shoppyglobe.com";


    const exists =
        await User.findOne({
            email: adminEmail
        });


    if (!exists) {

        await User.create({

            name: "Admin",

            email: adminEmail,

            password:
                "$2a$10$8Jf7Z6x8X7W4xP8VJ7N7pO5Y2v4vJ2Y1x8v7r4Y6w1Y9y9Y9Y9Y9Y",

            role: "admin"

        });


        console.log(
            "Admin user created"
        );

    }

};


module.exports = adminSeed;
