const request = require("supertest");

const app = require("../server");


describe("Order API Security", () => {


    test("Order creation requires authentication", async () => {

        const response =
            await request(app)
                .post("/api/orders");


        expect(response.statusCode)
            .toBe(401);

    });



    test("Admin APIs require authentication", async () => {

        const response =
            await request(app)
                .get("/api/admin/users");


        expect(response.statusCode)
            .toBe(401);

    });


});
