const {
    connectDatabase,
    disconnectDatabase
} = require("../config/database");

beforeAll(async () => {
    if (
        process.env.NODE_ENV === "test" &&
        process.env.USE_REAL_DB === "true"
    ) {
        await connectDatabase();
    }
});

afterAll(async () => {
    if (process.env.USE_REAL_DB === "true") {
        await disconnectDatabase();
    }
});
