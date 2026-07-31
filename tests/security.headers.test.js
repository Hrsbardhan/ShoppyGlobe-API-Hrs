const request = require("supertest");

const app = require("../server");


describe("Security Headers", () => {


    test("API should contain security headers", async () => {

        const response =
            await request(app)
                .get("/api/health");


        expect(
            response.headers["x-content-type-options"]
        ).toBeDefined();


        expect(
            response.headers["x-frame-options"]
        ).toBeDefined();

    });


});
