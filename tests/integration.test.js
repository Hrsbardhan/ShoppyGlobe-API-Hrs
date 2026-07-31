const request = require("supertest");

const app = require("../server");


describe("Application Integration", () => {


    test("Health endpoint works", async () => {


        const response =
            await request(app)
                .get("/api/health");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);


    });


    test("Products endpoint returns standard response", async () => {


        const response =
            await request(app)
                .get("/api/products");


        expect(response.body)
            .toHaveProperty("success");


        expect(response.body)
            .toHaveProperty("message");


        expect(response.body)
            .toHaveProperty("data");


    });


});
