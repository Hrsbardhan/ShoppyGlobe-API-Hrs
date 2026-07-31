const request = require("supertest");

const app = require("../server");


describe("Error Handling", () => {


    test("Unknown endpoint returns standard error response", async () => {

        const response =
            await request(app)
                .get("/unknown-endpoint");


        expect(response.statusCode)
            .toBe(404);


        expect(response.body.success)
            .toBe(false);


        expect(response.body.data)
            .toBeNull();

    });


});
