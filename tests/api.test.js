const request = require("supertest");

const app = require("../server");


describe("API Health Check", () => {

    test("GET /api/health should return healthy status", async () => {

        const response = await request(app)
            .get("/api/health");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);

    });

});
