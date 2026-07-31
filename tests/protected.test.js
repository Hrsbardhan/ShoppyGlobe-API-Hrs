const request = require("supertest");
const app = require("../server");

describe("Protected API", () => {

    test("Cart API without token should reject request", async () => {

        const response =
            await request(app)
                .get("/api/cart");


        expect(response.statusCode)
            .toBe(401);

    });


    test("Orders API without token should reject request", async () => {

        const response =
            await request(app)
                .get("/api/orders");


        expect(response.statusCode)
            .toBe(401);

    });

});
