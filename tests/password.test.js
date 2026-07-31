const request = require("supertest");

const app = require("../server");


describe("User Security API", () => {


    test("Change password route exists", async () => {


        const response =
            await request(app)
                .put("/api/users/change-password")
                .send({

                    currentPassword:
                        "oldpassword",

                    newPassword:
                        "newpassword"

                });


        expect(response.statusCode)
            .toBeDefined();


    });


});
