module.exports = {
    testEnvironment: "node",
    testMatch: [
        "**/tests/**/*.test.js"
    ],
    setupFilesAfterEnv: [ "./tests/mongo.setup.js",
        "./tests/setup.js"
    ],
    verbose: true
};

