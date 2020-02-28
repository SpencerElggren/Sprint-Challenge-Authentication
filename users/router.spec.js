const request = require("supertest");

const server = require("../api/server.js");

describe("jokes router", function() {
    it("should run the tests", function() {
        expect(true).toBe(true);
    });

    describe("GET /api/jokes", function() {
        it("should return 200 OK", function() {
            return request(server)
                .get("/api/jokes")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it("should return jokes as the router value", function() {
            return request(server)
                .get("/api/jokes")
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                });
        });

        it("should return JSON formatted body", function() {
            return request(server)
                .get("/api/jokes")
                .then(res => {
                    expect(res.type).toMatch(/json/);
                });
        });
    });
});
