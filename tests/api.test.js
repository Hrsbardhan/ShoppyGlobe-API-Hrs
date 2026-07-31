const request = require("supertest");

const app = require("../server");

describe("Health API", () => {

    test("GET /api/health", async () => {

        const response = await request(app)
            .get("/api/health");

        expect(response.statusCode)
            .toBe(200);

        expect(response.body.success)
            .toBe(true);

    });

});
