import request from "supertest";
import app from "../app.js";
//import { dummyData } from "../libs/dummyData.js";

describe("GET /api/users should show all users", function () {
   test("gives us back 200 OK success status code", async function () {
      const actual = await request(app).get("/api/users");

      // expect(actual.send).toStrictEqual(expectedSend);
      //  expect(actual.statusCode).toBe(200);
      expect(actual.status).toEqual(200);
   });

   test("gives us back an object", async function () {
      const actual = await request(app).get("/api/users");

      expect(actual.body).toBeInstanceOf(Object);
   });
});
