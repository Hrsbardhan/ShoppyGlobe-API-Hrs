const request = require("supertest");

const app = require("../server");


describe("Service Status API", () => {


    test("Health check returns service status", async () => {


        const response =
            await request(app)
                .get("/api/status/health");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);


        expect(response.body.data.service)
            .toBe("ShoppyGlobe API");


    });


});
