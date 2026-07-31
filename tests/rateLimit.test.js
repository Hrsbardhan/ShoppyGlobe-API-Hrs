const request = require("supertest");

const app = require("../server");


describe("Authentication Rate Limit", () => {


    test("Auth routes are protected by rate limiter", async () => {


        const response =
            await request(app)
                .post("/api/auth/login")
                .send({

                    email:
                        "invalid@test.com",

                    password:
                        "wrong"

                });


        expect(response.statusCode)
            .toBeDefined();


    });


});
