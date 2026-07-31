const request = require("supertest");

const app = require("../server");


describe("Monitoring API", () => {


    test("Metrics endpoint should return system data", async () => {


        const response =
            await request(app)
                .get("/api/monitoring/metrics");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);


    });


});
