const request = require("supertest");

const app = require("../server");


describe("Security Middleware", () => {


    test("API should return request id header", async () => {

        const response =
            await request(app)
                .get("/api/health");


        expect(
            response.headers["x-request-id"]
        ).toBeDefined();

    });



    test("Unknown route should return 404", async () => {

        const response =
            await request(app)
                .get("/api/not-found");


        expect(response.statusCode)
            .toBe(404);

    });


});
