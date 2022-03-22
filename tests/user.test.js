const request = require('supertest');
const app = require("../server");

describe("Auth endpoints", () => {
    it("Should signup user", async () => {
        const res = await request(app)
            .post("/create")
            .send({
                lastname: "Aly",
                firstname: "Aly",
                email: "aly.fall@gmail.com",
                password: "123456",
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("message");
    });
})