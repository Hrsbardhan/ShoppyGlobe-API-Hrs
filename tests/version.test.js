const request = require("supertest");

const app = require("../server");


describe("API Version", () => {


    test("GET /api/v1 returns API version", async () => {


        const response =
            await request(app)
                .get("/api/v1");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);


        expect(response.body.data.version)
            .toBe("1.0.0");


    });


});
