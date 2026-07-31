const {
    connectDatabase,
    disconnectDatabase
} = require("../config/database");


beforeAll(async () => {

    if (process.env.NODE_ENV === "test") {

        await connectDatabase();

    }

});


afterAll(async () => {

    await disconnectDatabase();

});
