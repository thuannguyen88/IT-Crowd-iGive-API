import request from "supertest";
import app from "./app.js";

// describe("GET /users", function () {
//   test("gives us back 200, with a message", async function () {
//     const expectedBody = {
//       message: "I wish we had some information to give you ☹️",
//     };
//     const actual = await request(app).get("/users");
//     // expect(actual.body).toStrictEqual(expectedBody);
//     expect(actual.statusCode).toBe(200);
//   });
// });

describe("GET /", function () {
  test("gives us back 200 OK success status code", async function () {
    const actual = await request(app).get("/");

    // expect(actual.send).toStrictEqual(expectedSend);
    expect(actual.statusCode).toBe(200);
  });

  test(`should respond with message 'iGive api homepage'`, async function () {
    const expectedResponse = "iGive api homepage";

    const actual = await request(app).get("/");
    expect(actual.body).toStrictEqual(expectedResponse);
  });
});

// describe("GET /api/users", function () {
//   test("should respond with a 200 OK success status code", async function () {
//     const actual = await request(app).get("/");
//     console.log(actual);
//     expect(actual.status).toBe(200);
//   });
// });
