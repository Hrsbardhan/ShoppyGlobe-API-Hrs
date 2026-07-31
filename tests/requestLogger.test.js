const request = require("supertest");

const app = require("../server");


describe("API Request Tracking", () => {

    test("Response should contain request id", async () => {

        const response =
            await request(app)
                .get("/api/health");


        expect(
            response.headers["x-request-id"]
        ).toBeDefined();

    });

});
