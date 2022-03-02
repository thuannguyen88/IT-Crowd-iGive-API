import request from "supertest";
import app from "../app.js";
import { uploader } from "../config.js";
import { jest } from "@jest/globals";

// GET test to /api/items
describe("GET /api/items", function () {
  test("it should give us back 200 SUCCESS", async function () {
    const actual = await request(app)
      .get("/api/items")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should give us back an object with keys; message, success, payload", async function () {
    const actual = await request(app).get("/api/items");
    expect(actual.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });
});

// GET test to /api/items/:id
describe("Get /api/items/:id", function () {
  const id = 1;
  test("it should give us back 200 SUCCESS", async function () {
    const actual = await request(app)
      .get(`/api/items/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should give us back an object containing message, success, payload", async function () {
    const actual = await request(app).get(`/api/items/${id}`);

    expect(actual.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });
});

// DELETE test to /api/items/:id
describe("Delete /api/items/:id", function () {
  // test("it should give us back 200 SUCCESS", async function () {
  //   const actual = await request(app)
  //     .delete(`/api/items/${id}`)
  //     .expect("Content-Type", /json/)
  //     .expect(200);
  // });

  test("it should give us back an object containning message, success, payload", async function () {
    const id = 5;

    // const mockDestroy = jest.spyOn(uploader, "destroy");

    // mockDestroy.mockReturnValue();

    const actual = await request(app)
      .delete(`/api/items/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(actual.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });

  // test("it should give us back an object containing message, success, payload", async function () {
  //   const actual = await request(app).get(`/api/items/${id}`);

  //   expect(actual.body).toEqual(
  //     expect.objectContaining({
  //       message: expect.any(String),
  //       success: expect.any(Boolean),
  //       payload: expect.any(Array),
  //     })
  //   );
  // });
});
