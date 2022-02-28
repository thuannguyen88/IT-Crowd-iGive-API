import request from "supertest";
import app from "../app.js";

describe("GET /api/users should show all users", function () {
  test("gives us back 200 OK success status code", async function () {
    const res = await request(app).get("/api/users");

    // expect(actual.send).toStrictEqual(expectedSend);
    //  expect(actual.statusCode).toBe(200);
    expect(res.status).toEqual(200);
  });
});
