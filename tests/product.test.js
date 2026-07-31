const request = require("supertest");
const app = require("../server");

describe("Product API", () => {

    test("GET /api/products should return products", async () => {

        const response =
            await request(app)
                .get("/api/products");


        expect(response.statusCode)
            .toBe(200);


        expect(response.body.success)
            .toBe(true);

    });


    test("GET /api/products invalid id should fail", async () => {

        const response =
            await request(app)
                .get("/api/products/invalid-id");


        expect(response.statusCode)
            .toBe(400);


        expect(response.body.success)
            .toBe(false);

    });

});
