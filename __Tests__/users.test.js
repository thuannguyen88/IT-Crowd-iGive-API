import request from "supertest";
import app from "../app.js";
import { jest } from "@jest/globals";
import { pool } from "../db/connection.js";
import {
  testUsers,
  newUser,
  newUserRequestBody,
  expectedNewUser,
  expectedUsers,
} from "../libs/testData.js";
import { uploader } from "../config.js";

//ARRANGE, ACT, ASSERT

// GET to /api/users
describe("GET /api/users", function () {
  // mock pool.query
  const mockPoolQuery = jest.spyOn(pool, "query");

  beforeEach(() => {
    mockPoolQuery.mockClear();
  });

  test("it should give us back 200 SUCCESS", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const actual = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should give us all users from database", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const actual = await request(app).get("/api/users");

    expect(actual.body.payload).toEqual(expectedUsers);
  });

  test("it should give us response object containing properties (message, success and payload)", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const expectedResponse = {
      message: "all users",
      success: true,
      payload: testUsers,
    };

    const actual = await request(app).get("/api/users");

    expect(actual.body).toEqual(expectedResponse);
  });
});

// GET to /api/users/:id
describe("Get /api/users/:id", function () {
  // mock pool.query
  const mockPoolQuery = jest.spyOn(pool, "query");

  beforeEach(() => {
    mockPoolQuery.mockClear();
  });

  const id = [1, 2, 3];

  test(`it should give us back 200 SUCCESS`, async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValue({
      rows: testUsers,
    });

    const actual = await request(app)
      .get(`/api/users/1`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  for (let i = 0; i < id.length; i++) {
    test(`params id ${id[i]} should give us user with id ${id[i]}`, async function () {
      // specify return so doesnt speak to database
      mockPoolQuery.mockClear();

      mockPoolQuery.mockResolvedValue({
        rows: [testUsers[i]],
      });

      const actual = await request(app).get(`/api/users/${id[i]}`);
      expect(actual.body.payload[0]).toEqual(expectedUsers[i]);
      // console.log("testusers[i]", testUsers[i], actual.body.payload[0]);
    });
  }

  for (let i = 0; i < id.length; i++) {
    test(`params id ${id[i]} should give us response object containing properties (message, success and payload)`, async function () {
      // specify return so doesnt speak to database
      mockPoolQuery.mockClear();

      mockPoolQuery.mockResolvedValueOnce({
        rows: [testUsers[i]],
      });

      const expectedResponse = {
        message: `found user with id ${id[i]}`,
        success: true,
        payload: [testUsers[i]],
      };

      const actual = await request(app).get(`/api/users/${id[i]}`);

      expect(actual.body).toEqual(expectedResponse);
      // console.log(actual.body);
      // console.log(expectedResponse);
    });
  }
});

// POST to /api/users

describe("POST /api/users", function () {
  const mockPoolQuery = jest.spyOn(pool, "query");

  const mockUpload = jest.spyOn(uploader, "upload");

  beforeEach(() => {
    mockPoolQuery.mockClear();
    mockUpload.mockClear();
  });

  function mockFunctions() {
    mockUpload.mockResolvedValueOnce({ secure_url, public_id });

    mockPoolQuery.mockResolvedValueOnce({ rows: newUser });
  }

  const secure_url =
    "https://res.cloudinary.com/dzektczea/image/upload/v1646091226/fgubsl1bw8dekqo94mix.jpg";
  const public_id = "xnefc68tvb0wu94ewyls";

  test("it should give us back 200 success", async function () {
    mockFunctions();
    // mockUpload.mockResolvedValueOnce({ secure_url, public_id });

    // mockPoolQuery.mockResolvedValueOnce({ rows: newUser });

    const actual = await request(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(newUserRequestBody);

    expect(actual.statusCode).toBe(200);
    // console.log(actual.statusCode);
  });

  test("response should give us payload with newUser object", async function () {
    mockFunctions();
    // mockUpload.mockResolvedValueOnce({ secure_url, public_id });

    // mockPoolQuery.mockResolvedValueOnce({ rows: newUser });

    const actual = await request(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(newUserRequestBody);

    expect(actual.body.payload[0]).toEqual(expectedNewUser);

    // console.log(
    //   "actual payload[0]",
    //   actual.body.payload[0],
    //   "expected new user",
    //   expectedNewUser
    // );
  });

  test("it should give us response object containing properties (message, success, payload", async function () {
    mockFunctions();

    // mockUpload.mockResolvedValueOnce({ secure_url, public_id });

    // mockPoolQuery.mockResolvedValueOnce({ rows: newUser });

    const expectedResponse = {
      message: `user created successfully`,
      success: true,
      payload: newUser,
    };

    const actual = await request(app).post("/api/users");

    expect(actual.body).toEqual(expectedResponse);

    // console.log(actual.body, expectedResponse);
  });
});
