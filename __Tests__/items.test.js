import request from "supertest";
import app from "../app.js";

// GET test to /api/items
describe("GET /api/items", function () {
  test("it should give us back 200 SUCCESS", async function () {
    const actual = await request(app)
      .get("/api/items")
      .expect("Content-Type", /json/)
      .expect(200);

    //  expect(actual.status).toEqual(200);
  });

  test("it should give us back an object with keys; message, success, payload", async function () {
    const actual = await request(app).get("/api/users");
    expect(actual.body).toBeInstanceOf(Object);
  });
});
