const request = require("supertest");

const app = require("../server");


describe("Final API Regression", () => {


    test("Root health endpoint", async () => {

        const response =
            await request(app)
                .get("/");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);

    });



    test("Version endpoint", async () => {

        const response =
            await request(app)
                .get("/api/v1");


        expect(response.statusCode)
            .toBe(200);

    });



    test("Swagger endpoint available", async () => {

        const response =
            await request(app)
                .get("/api-docs/");


        expect([200,301,302])
            .toContain(
                response.statusCode
            );

    });



    test("Monitoring endpoint", async () => {

        const response =
            await request(app)
                .get("/api/monitoring/metrics");


        expect(response.statusCode)
            .toBe(200);

    });


});
