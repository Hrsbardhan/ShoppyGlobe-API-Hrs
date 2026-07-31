const request = require("supertest");
const app = require("../server");

describe("Authentication API", () => {

    test("Register validation should reject empty payload", async () => {

        const response =
            await request(app)
                .post("/api/auth/register")
                .send({});


        expect(response.statusCode)
            .toBe(400);


        expect(response.body.success)
            .toBe(false);

    });


    test("Login validation should reject empty payload", async () => {

        const response =
            await request(app)
                .post("/api/auth/login")
                .send({});


        expect(response.statusCode)
            .toBe(400);


        expect(response.body.success)
            .toBe(false);

    });

});
